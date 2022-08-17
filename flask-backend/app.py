from flask import Flask, abort, request
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
    
    spacy_lang_model = language_switcher(language)

    if(spacy_lang_model == "Language Not Supported!"):
        # case where input language is not supported
        return abort(400)
    
    nlp = spacy.load(language_switcher(language))
    return language_switcher(language)