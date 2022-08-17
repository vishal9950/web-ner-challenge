from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
ors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/health_check")
def health_check():
    return "Ok!"
