# django-cheatsheet.md

* don't forget to remove \'s. for markdown only. 

## Step 1: Create Django Project

```markdown
# Django with Tailwind CSS + Flowbite Cheatsheet

## Create Project

```bash
$ mkdir django-things
$ cd django-things
$ python3 -m venv .venv
$ source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
$ touch README.md
$ touch .gitignore
$ pip install django
$ django-admin startproject django_things_project .

```

## Step 2: Run Development Server

```bash
$ python manage.py runserver
```

## Step 3: Apply Migrations

```bash
$ python manage.py migrate
```

## Step 4: Create App

```bash
$ python manage.py startapp things
```

## Step 5: Configure App in Project

```pip install django-compressor
```

### I. Edit `settings.py`

```python
# config/settings.py

INSTALLED_APPS = [
    # ... other apps
    'things',  # Add your app name here
    'compressor',
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],  # Add this line
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
```

### II. Configure `compressor` in `settings.py`

```python
# config/settings.py

COMPRESS_ROOT = BASE_DIR / 'static'
COMPRESS_ENABLED = True
STATICFILES_FINDERS = ('compressor.finders.CompressorFinder',)
```

## Step 6: Create Views

### Edit `things/views.py`

```python
# things/views.py
from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = 'home.html'
```

## Step 7: Create URLs

### Edit `things/urls.py`

```python
# things/urls.py
from django.urls import path
from .views import HomePageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
]
```

## Step 8: Include App URLs in Project URLs

### Edit `django_things_project/urls.py`

```python
# django_things_project/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('things.urls')),  # Add your app name here
]
```

## Step 9: Create Templates

```bash
$ mkdir templates
$ touch templates/base.html
$ touch templates/home.html
```

### I. Edit `base.html`

```django
<!-- templates/base.html -->

{\% load compress \%}
{\% load static \%}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{\% block title \%}Django + Tailwind CSS{\% endblock \%}</title>

    {\% compress css \%}
    <link rel="stylesheet" href="{\% static 'src/output.css' \%}">
    {\% endcompress \%}

</head>

<body class="bg-green-50">
    <nav class="bg-green-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="{\% url 'home' \%}" class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Django Things</span>
            </a>
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li><a href="{\% url 'home' \%}" class="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white" aria-current="page">Home</a></li>
                <!-- Add more navigation links as needed -->
            </ul>
        </div>
    </nav>
    <div class="container mx-auto mt-4">
        {\% block content \%}
        {\% endblock content \%}
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
</body>

</html>
```

### II. Edit `home.html`

```django
<!-- templates/home.html -->

{\% extends "base.html" \%}

{\% block content \%}
  <h1 class="text-3xl text-green-800">Django + Tailwind CSS + Flowbite</h1>
  <!-- Add your content here -->
{\% endblock content \%}
```

## Step 10: Install Tailwind CSS

```bash
$ npm install -D tailwindcss
$ npx tailwindcss init
```

### I. Configure Tailwind CSS in `tailwind.config.js`

```javascript
// tailwind.config.js
module.exports = {
  content: [
      './templates/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### II. Import

 Tailwind CSS in `input.css`

```css
/* static/src/input.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

I used...

```
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```


### III. Build Tailwind CSS

```bash
$ npx tailwindcss -i ./static/src/input.css -o ./static/src/output.css --watch
```

## Step 11: Install Flowbite (Optional)

```bash
$ npm install flowbite
```

### Configure Flowbite in `tailwind.config.js`

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('flowbite/plugin')
  ]
}
```

tailwind.config.js should look like this now

```
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
       './templates/**/*.html',
       './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
```

### Include Flowbite in `base.html`

```html
<!-- templates/base.html -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
```

## Step 12: Run Development Server

```bash
$ python manage.py runserver
```

Visit `http://127.0.0.1:8000/` in your browser to see the result.
```

## Step 13: Create Views 

### Create Views for "about," "home," and "base":


In your `things/views.py` file, add the following view classes for "about" and "base":

```python
# things/views.py
from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = 'home.html'

class AboutPageView(TemplateView):
    template_name = 'about.html'

class BasePageView(TemplateView):
    template_name = 'base.html'
```

### Create URLs

In your `things/urls.py` file, update the file to include URLs for "about" and "base":

```python
# things/urls.py
from django.urls import path
from .views import HomePageView, AboutPageView, BasePageView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('about/', AboutPageView.as_view(), name='about'),
    path('base/', BasePageView.as_view(), name='base'),
]
```

### Update Templates

1. Create a new file `about.html` in the `templates` directory:

```bash
$ touch templates/about.html
```

2. Edit `about.html`:

```django
<!-- templates/about.html -->

{\% extends "base.html" \%}

{\% block content \%}
  <h1 class="text-3xl text-blue-800">About Us</h1>
  <p class="text-gray-600">This is the about page content.</p>
{\% endblock content \%}
```

3. Update `home.html`:

```django
<!-- templates/home.html -->

{\% extends "base.html" \%}

{\% block content \%}
  <h1 class="text-3xl text-green-800">Django + Tailwind CSS + Flowbite</h1>
  <p class="text-gray-600">This is the home page content.</p>
{\% endblock content \%}
```

4. Update `base.html`:

```django
<!-- templates/base.html -->

{\% load compress \%}
{\% load static \%}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{\% block title \%}Django + Tailwind CSS{\% endblock \%}</title>

    {\% compress css \%}
    <link rel="stylesheet" href="{\% static 'src/output.css' \%}">
    {\% endcompress \%}

</head>

<body class="bg-green-50">
    <nav class="bg-green-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="{\% url 'home' \%}" class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Django Things</span>
            </a>
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li><a href="{\% url 'home' \%}" class="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white" aria-current="page">Home</a></li>
                <li><a href="{\% url 'about' \%}" class="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white" aria-current="page">About</a></li>
                <!-- Add more navigation links as needed -->
            </ul>
        </div>
    </nav>
    <div class="container mx-auto mt-4">
        {\% block content \%}
        {\% endblock content \%}
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
</body>

</html>
```

### Update URLs

In your `django_things_project/urls.py` file, update the file to include URLs for "about" and "base":

```python
# django_things_project/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('things.urls')),  # Add your app name here
]
```


don't forget to - ```pip freeze > requirements.txt```



## Adding Models to Django

Assuming your project is named `snack_tracker_project`:

### Step 1: Create Django Project

```bash
$ django-admin startproject snack_tracker_project
$ cd snack_tracker_project
```

### Step 2: Create Snacks App

```bash
$ python manage.py startapp snacks
```

### Step 3: Update Project Settings

In `snack_tracker_project/settings.py`, add `'snacks'` to `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    # ... other apps
    'snacks',
]
```

### Step 4: Create Snack Model

In `snacks/models.py`:

```python
# snacks/models.py
from django.db import models
from django.contrib.auth import get_user_model

class Snack(models.Model):
    name = models.CharField(max_length=64)
    purchaser = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    description = models.TextField()

    def __str__(self):
        return self.name
```

### Step 5: Register Snack Model in Admin

In `snacks/admin.py`:

```python
# snacks/admin.py
from django.contrib import admin
from .models import Snack

admin.site.register(Snack)
```

### Step 6: Create Migrations and Migrate

```bash
$ python manage.py makemigrations
$ python manage.py migrate
```

### Step 7: Create Superuser

```bash
$ python manage.py createsuperuser
```

Follow the prompts to create a superuser account.

### Step 8: Create Snack List View

In `snacks/views.py`:

```python
# snacks/views.py
from django.views.generic import ListView
from .models import Snack

class SnackListView(ListView):
    model = Snack
    template_name = 'snack_list.html'
    context_object_name = 'snacks'
```

### Step 9: Create Snack List Template

Create a `templates` folder in the project root and add `base.html`:

```html
<!-- snack_tracker_project/templates/base.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}Snack Tracker{% endblock %}</title>
</head>
<body>
    <div>
        <h1>Welcome to Snack Tracker</h1>
        {% block content %}{% endblock %}
    </div>
</body>
</html>
```

Now, create `snack_list.html`:

```html
<!-- snack_tracker_project/snacks/templates/snack_list.html -->
{% extends "base.html" %}

{% block title %}Snack List{% endblock %}

{% block content %}
    <h2>Snack List</h2>
    <ul>
        {% for snack in snacks %}
            <li>{{ snack.name }} - {{ snack.purchaser.username }} - {{ snack.description }}</li>
        {% endfor %}
    </ul>
{% endblock %}
```

### Step 10: Update Project URLs

In `snack_tracker_project/urls.py`:

```python
# snack_tracker_project/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('snacks.urls')),
]
```

### Step 11: Create Snacks URLs

Create a `urls.py` file in the `snacks` app folder:

```python
# snacks/urls.py
from django.urls import path
from .views import SnackListView

urlpatterns = [
    path('', SnackListView.as_view(), name='snack_list'),
]
```

### Step 12: Run Development Server

```bash
$ python manage.py runserver
```

Visit `http://127.0.0.1:8000/` in your browser to see the Snack List.

