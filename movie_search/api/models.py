from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=100, unique=True)
    director = models.CharField(max_length=50)
    release_year = models.IntegerField()
    description = models.TextField()
    thumbs_up = models.PositiveIntegerField(default=0)
    thumbs_down = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title #returns title of the movie

# class Ratings(models.Model):
#     movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
#     thumbs_up = models.PositiveIntegerField(default=0)
#     thumbs_down = models.PositiveIntegerField(default=0)

#     def __str__(self):
#         return f'{self.movie.title}: thumbs up={self.thumbs_up}, thumbs_down={self.thumbs_down}'