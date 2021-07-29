from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from django.conf import settings

# Create your views here.
class SearchResult(APIView):
    def get(self, request, query):

        api_key = settings.API_KEY
        print(">>>>>", api_key)
        payload = {'api_key': api_key,
                   'query': query}
        url = "https://api.themoviedb.org/3/search/movie"
        response = requests.get(url, params=payload)
        result = response.json()
        return Response(result)
