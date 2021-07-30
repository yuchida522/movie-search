from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from django.conf import settings

# Create your views here.
class SearchResult(APIView):
    def get(self, request, query):

        api_key = settings.API_KEY
        # payload = {'api_key': api_key,
        #            'query': query}
        url = f'https://imdb-api.com/en/API/SearchMovie/{api_key}/{query}'
        response = requests.get(url)
        result = response.json()
        return Response(result)
