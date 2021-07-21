from django.urls import path
from .views import MovieView

#specifies endpoints event more
urlpatterns = [
    path('movies', MovieView.as_view())
]