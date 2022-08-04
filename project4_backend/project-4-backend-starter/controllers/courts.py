from flask import Blueprint, request

from models.court_data import courtsDB

router = Blueprint("courts", __name__)

@router.route("/courts", method=["GET"])
def getCourts():
  return courtsDB

@router.route("/courts", methods=["POST"])
def createCourts():
    print(request.json, type(request.json))
    courtsDB["courts"].append(request.json)
    return request.json

