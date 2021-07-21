from django.urls import path
from .views import main

#specifies endpoints event more
urlpatterns = [
    path('home', main)
]