

# Create PyPI package
1. Docs:
 * [packaging.python.org](https://packaging.python.org/tutorials/packaging-projects/)
 * I'l do it in docker:
 * `touch Dockerfile`
 * `nano Dockerfile`
    ```dockerfile
    # Dockerfile
    FROM python:latest

    RUN apt update

    ENV PYTHONDONTWRITEBYTECODE 1

    ENV PYTHONUNBUFFERED 1

    RUN pip install --upgrade pip    
    ```
 * `docker build -t ipy .`
 * `docker run -it -v ${PWD}:/home --name py ipy bash`

2. Setup:
 * `mkdir /home/vipps-python`
 * `cd /home/vipps-python`
 * `mkdir vipps`
 * `mkdir tests`
 * `touch vipps/__init__.py`
 * `touch LICENSE`
 * `touch README.md`
 * `touch pyproject.toml`
 * `touch setup.cfg`
 * `touch setup.py`
 * `nano pyproject.toml`
    ```toml
    # pyproject.toml
    [build-system]
    requires = [
        "setuptools>=42",
        "wheel"
    ]
    build-backend = "setuptools.build_meta"
    ```
 * `nano setup.cfg`
    ```conf
    # setup.cfg
    [metadata]
    name = vipps
    version = 0.1
    author = Almaz Kunpeissov
    author_email = hi@akun.dev
    description = Python bindings for the Vipps API
    long_description = file: README.md
    long_description_content_type = text/markdown
    url = https://github.com/almazkun/vipps-python
    keywords = vipps api payments
    license = MIT License
    license_files = LICENSE
    project_urls =
        Documentation = https://github.com/almazkun/vipps-python
        Source = https://github.com/almazkun/vipps-python
        Tracker = https://github.com/almazkun/vipps-python/issues
    classifiers =
        Development Status :: 2 - Pre-Alpha
        Intended Audience :: Developers
        Operating System :: OS Independent
        Programming Language :: Python :: 3 :: Only
        Programming Language :: Python :: 3.7
        Programming Language :: Python :: Implementation :: PyPy
        Topic :: Software Development :: Libraries :: Python Modules

    [options]
    packages = find:
    python_requires = >=3.7
    include_package_data = true
    zip_safe = false
    install_requires = requests >= 2

    [options.packages.find]
    exclude =
        tests
        tests.*
    ```
 * `nano setup.py`
    ```py
    from setuptools import setup

    setup()
    ```
3. Creating distribution archives
 * `python3 -m pip install --upgrade build`
 * `python3 -m build`

4. Upload to Test.PyPI:
 * `python3 -m pip install --user --upgrade twine`
 * `python3 -m twine upload --repository testpypi dist/*`
 * username: `__token__`, password: your [test PyPI token](https://test.pypi.org/manage/account/#api-tokens)
 * `curl https://test.pypi.org/project/vipps/0.1/`

5. Installing package:
 * `python3 -m pip install --index-url https://test.pypi.org/simple/ --no-deps vipps`
 * `python3`
 * `import vipps`

6. Upload to the PyPI:
 * `python3 -m twine upload dist/*`
 * username: `__token__`, password: your [PyPI token](https://pypi.org/manage/account/#api-tokens)
