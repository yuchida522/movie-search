from django.shortcuts import render

# Create your views here.
#return the base template
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')