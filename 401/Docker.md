## Docker Cheatsheet

### Step 1: Install Docker and Docker Compose

```bash
# Install Docker (assuming you're on a Linux system)
sudo apt-get update
sudo apt-get install docker.io

# Install Docker Compose
brew install docker-compose
```

### Step 2: Start Docker Daemon

```bash
sudo service docker start
```

### Step 3: Create a Django Project

```bash
django-admin startproject wigs_api
cd wigs_api
```

### Step 4: Create a Django App

```bash
python manage.py startapp mywigs
```

### Step 5: Define the Model

Edit `mywigs/models.py`:

```python
from django.db import models

class Wig(models.Model):
    name = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    length = models.CharField(max_length=255)
    curl_pattern = models.CharField(max_length=255)
    density = models.CharField(max_length=255)
    hair_origin = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
```

### Step 6: Configure Django Settings

Add your app to `INSTALLED_APPS` in `settings.py`:

```python
# settings.py
INSTALLED_APPS = [
    # ...
    'mywigs',
    # ...
]
```

### Step 7: Create API Serializers

Create a file `mywigs/serializers.py`:

```python
from rest_framework import serializers
from .models import Wig

class WigSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wig
        fields = '__all__'
```

### Step 8: Create API Views

Create a file `mywigs/views.py`:

```python
from rest_framework import viewsets
from .models import Wig
from .serializers import WigSerializer

class WigViewSet(viewsets.ModelViewSet):
    queryset = Wig.objects.all()
    serializer_class = WigSerializer
```

### Step 9: Configure API URLs

Create a file `mywigs/urls.py`:

```python
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import WigViewSet

router = DefaultRouter()
router.register(r'wigs', WigViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
```

Include these URLs in your project's `urls.py`:

```python
# wigs_api/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('mywigs.urls')),
]
```

### Step 10: Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 11: Install Django REST Framework

```bash
pip install djangorestframework
```

### Step 12: Create Docker Configuration

Create a `Dockerfile`:

```Dockerfile
# Dockerfile
FROM python:3.8.12

WORKDIR /app

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

Create a `docker-compose.yml`:

```yaml
# docker-compose.yml
version: '3'

services:
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/app
    ports:
      - "8000:8000"
```

### Step 13: Build and Run Docker Container

```bash
docker-compose up --build
```

### Step 14: Verify Docker Daemon

```bash
docker info
```

## Admin.py Cheatsheet

1. Open your `mywigs/admin.py` file.

2. Import the necessary models and modules:

    ```python
    from django.contrib import admin
    from .models import Wig
    ```

3. Register your models with the admin site:

    ```python
    admin.site.register(Wig)
    ```

4. Customize the admin display for your model (optional):

    ```python
    class WigAdmin(admin.ModelAdmin):
        list_display = ('name', 'color', 'length', 'owner', 'created_at')
        search_fields = ('name', 'owner__username')  # Enable searching by name and owner's username

    admin.site.register(Wig, WigAdmin)
    ```

   Adjust the `list_display` and `search_fields` according to your model fields.

## URLs.py Cheatsheet with Authentication

1. Open your `mywigs/urls.py` file.

2. Import the necessary modules:

    ```python
    from django.urls import path, include
    from rest_framework import routers
    from .views import WigViewSet
    ```

3. Create a router and register your viewsets:

    ```python
    router = routers.DefaultRouter()
    router.register(r'wigs', WigViewSet)
    ```

4. Include the router's URLs and authentication URLs in your urlpatterns:

    ```python
    urlpatterns = [
        path('api/', include(router.urls)),
        path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),  # Add authentication URLs
    ]
    ```

   This includes the REST framework's default authentication views.

5. Add authentication classes to your `WigViewSet` (optional):

    ```python
    from rest_framework.authentication import TokenAuthentication
    from rest_framework.permissions import IsAuthenticated

    class WigViewSet(viewsets.ModelViewSet):
        authentication_classes = [TokenAuthentication]
        permission_classes = [IsAuthenticated]

        # ... your existing code ...
    ```

   This ensures that only authenticated users can access your API views.
6. Add to your settings

```
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ),
}
```
and include it in installed apps in your settings.py

```'rest_framework',
```



   Don't forget to create a .dockerignore file with the following content:
   .venv
   venv
    echo "pattern1" > .dockerignore
    echo "pattern2" >> .dockerignore



 Below are the steps to create a Django REST Framework (DRF) powered API with Docker, including adjustments to settings, permissions, authentication, views, models, URLs, migrations, and Docker configuration:

### Step 1: Create a Django Project and App
```bash
# Create a Django project
django-admin startproject yourprojectname

# Navigate into the project directory
cd yourprojectname

# Create a Django app
python manage.py startapp yourappname
```

### Step 2: Install Required Packages
```bash
pip install django djangorestframework psycopg2-binary
```

### Step 3: Adjust Project Settings
In `settings.py`:
```python
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'yourappname',
]

# ...

# Add DRF settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}

# ...

# Configure PostgreSQL as the database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'yourdbname',
        'USER': 'yourdbuser',
        'PASSWORD': 'yourdbpassword',
        'HOST': 'db',
        'PORT': '5432',
    }
}
```

### Step 4: Create Models, Views, and URLs
Create your models, views, and URLs in the `yourappname` app.

### Step 5: Define Custom Permissions
In `permissions.py` within your app:
```python
from rest_framework import permissions

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet
        return obj.owner == request.user
```

### Step 6: Apply Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 7: Create Docker Configuration
#### Dockerfile
Create a `Dockerfile` in your project directory:
```dockerfile
# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /code

# Copy the current directory contents into the container at /code
COPY . /code

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define command to run your application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

#### docker-compose.yml
Create a `docker-compose.yml` file in your project directory:
```yaml
version: '3'

services:
  web:
    build: .
    command: python /code/manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/code
    ports:
      - "8000:8000"
    depends_on:
      - db
    environment:
      - DJANGO_SETTINGS_MODULE=yourprojectname.settings
      - DATABASE_URL=postgres://yourdbuser:yourdbpassword@db:5432/yourdbname

  db:
    image: postgres:14
    volumes:
      - postgres_data:/var/lib/postgresql/data/
    environment:
      POSTGRES_DB: yourdbname
      POSTGRES_USER: yourdbuser
      POSTGRES_PASSWORD: yourdbpassword
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

### Step 8: Build and Run Docker Container
```bash
docker-compose up --build
```

This will start your Django app in a Docker container. Access it at `http://localhost:8000`.

Make sure to replace placeholders (`yourprojectname`, `yourappname`, `yourdbname`, `yourdbuser`, `yourdbpassword`) with your actual project, app, and database details.

Additionally, adjust the DRF settings, models, views, and URLs as per your requirements.

The necessary packages to install for a basic Django project with Django REST Framework and PostgreSQL database are:

1. **Django**: The core Django framework.
   ```bash
   pip install django
   ```

2. **Django REST Framework (DRF)**: A powerful and flexible toolkit for building Web APIs.
   ```bash
   pip install djangorestframework
   ```

3. **Psycopg2-Binary**: A PostgreSQL adapter for Python. Required if you're using PostgreSQL as your database.
   ```bash
   pip install psycopg2-binary
   ```

These are the minimum required packages for setting up a Django project with DRF and PostgreSQL. 