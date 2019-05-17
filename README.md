# entreGo

App per-to-peer, connect people who need to transport clothing merchandise with people who have cargo vehicle.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have:

```
npm (Node Package Manager)
python 3
pip (Python Package Manager)
```
Also we recommend the use of pipenv so install it

```bash
pip install pipenv 
```

### Installing

How to get a development env running:

Install npm packages in the ```root``` folder.

```bash
npm i
```

Then go to to the folder ```./backend``` and install the virtual env with the pip packages.

```bash
PIPENV_VENV_IN_PROJECT=true pipenv install
```

Whit this you install all devDependencies and dependencies the project need.

## Run the project

This project use django as backend so you need to run the server, first of all active your virtual env, so in ```./backend``` folder use:

```bash
pipenv shell
```
In case you need to desactivate the virtual env you can do it with:

```bash
exit
```

Then go to the ```./backend/entrego```.
Migrate for the first time if you didn't it:

```bash
pipenv run migrate
```
You can run the server with

```bash
pipenv run server
```
This is all for the backend side, for see the project now you just need to:

```bash
npm run dev
```

Now you can see the project connected & working on http://localhost:8080/

## Dev team

Joaquin | Harold | Harold | Roxana
------------ | ----------- | ------------ | -----------
[<img src="https://avatars0.githubusercontent.com/u/19353687?s=400&v=4" width="70" height="70" />](https://github.com/ByeBye-Sama) | [<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="70" height="70" />](https://github.com/hacodeml) | [<img src="https://avatars2.githubusercontent.com/u/47786832?s=460&v=4" width="70" height="70" />](https://github.com/haroldavis) | [<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="70" height="70" />](https://github.com/roxanaes)

## License

[Apache 2.0](https://github.com/ByeBye-Sama/entreGo/blob/master/LICENSE)
