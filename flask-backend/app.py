from flask import Flask, abort, jsonify, request
from flask_cors import CORS
from numpy import equal
import spacy
from utils import language_switcher

app = Flask(__name__)
ors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/health_check")
def health_check():
    """Health Check route

    Helps check the status of the server
    Returns: A success string
    """
    return "Ok!"

@app.route("/entities", methods=(['POST']))
def entities():
    """Named Entity Recognition route

    This route loads the respective language spacy model to 
    identify the named entities for the given text
    Returns: The recognized named entities
    """
    language = request.json["language"];
    text = request.json["text"];
    return_result = dict()
    
    spacy_lang_model = language_switcher(language)

    if(spacy_lang_model == "Language Not Supported!"):
        # case where input language is not supported
        return abort(400) # bad request
    
    nlp = spacy.load(language_switcher(language))
    model_results = nlp(text)

    if not model_results.ents:
        # case when no NER are found
        return jsonify({})

    for ent in model_results.ents:
        if ent.label_ not in return_result:
            return_result[ent.label_] = []
        if ent.text not in return_result[ent.label_]:
            return_result[ent.label_].append(ent.text)

    return jsonify(return_result)