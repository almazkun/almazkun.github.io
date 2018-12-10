from django.urls import path
from . import views
from django.urls import include


urlpatterns = [
    path('', views.index, name='index'),
    path('book/', views.BookListView.as_view(), name='book'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
    path('author/', views.AuthorListView.as_view(), name='author'),
    path('author/<int:pk>', views.AuthorDetailView.as_view(), name='author-detail'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
]
