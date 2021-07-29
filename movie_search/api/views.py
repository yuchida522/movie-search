from typing import Generic
from django.shortcuts import render
from rest_framework import generics
from .seralizers import MovieSerializers
from .models import Movie

# Create your views here.

class MovieView(generics.ListAPIView):
    ''' returns all movies in '''
    queryset = Movie.objects.all()
    serializer_class = MovieSerializers

