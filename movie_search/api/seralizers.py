from rest_framework import serializers
from .models import Movie

#turns reponse into JSON

class MovieSerializers(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'