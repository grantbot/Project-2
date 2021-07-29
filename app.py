# import dependencies
from flask import Flask
from flask import render_template, jsonify
from sqlalchemy.orm import Session
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import create_engine, func, inspect
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import json
import decimal

from sqlalchemy.sql.sqltypes import VARCHAR


class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return float(o)
        super(DecimalEncoder, self).default(o)


# setup database
engine = create_engine("postgresql://localhost/SpeedDating?user=postgres&password=postgres")

Base = declarative_base()


class Dategrid(Base):
    __tablename__ = 'dategrid'
    id = Column(Integer, primary_key=True)
    wave = Column(Integer)
    Participant_Number = Column(Integer)
    originally_from = Column(VARCHAR)
    field = Column(VARCHAR)
    race = Column(Integer)
    exphappy = Column(Integer)

class Plotlydata(Base):
    __tablename__ = 'plotly'
    Participant_Number = Column(Integer, primary_key=True)
    originally_from = Column(VARCHAR)
    field = Column(VARCHAR)
    race = Column(Integer)
    expectations_of_happiness = Column(Integer)
    Number_of_Dates = Column(Integer)

Session = sessionmaker(bind=engine)
session = Session()

# Create an instance of Flask
app = Flask(__name__)

# data routes
@app.route("/data")
def send_data():
    data = []
    rows = engine.execute("SELECT * FROM speeddatefinal").fetchall()
    for row in rows:
        # data.append([x for x in row])
        data.append(row._asdict())
    return json.dumps(data, cls=DecimalEncoder)


@app.route("/dategrid")
def send_dategrid():
    dategrid = []
    rows = engine.execute("SELECT * FROM dategrid").fetchall()
    for row in rows:
        # dategrid.append(lambda row: {c.name: str(getattr(row, c.name)) for c in row.__table__.columns})
        dategrid.append(row._asdict())
    return json.dumps(dategrid, cls=DecimalEncoder)

@app.route("/plotlydata")
def send_plotlydata():
    plotlydata = []
    rows = engine.execute("SELECT * FROM plotly").fetchall()
    for row in rows:
        # dategrid.append(lambda row: {c.name: str(getattr(row, c.name)) for c in row.__table__.columns})
        plotlydata.append(row._asdict())
    return json.dumps(plotlydata, cls=DecimalEncoder)

@app.route("/name")
def send_name():
    name = []
    rows = engine.execute("SELECT * FROM name").fetchall()
    for row in rows:
        # dategrid.append(lambda row: {c.name: str(getattr(row, c.name)) for c in row.__table__.columns})
        name.append(row._asdict())
    return json.dumps(name, cls=DecimalEncoder)

# @app.route('/csv')
# def send_csv():
#     name = []
#     rows = engine.execute("SELECT * FROM name").fetchall()
#     for row in rows:
#         # dategrid.append(lambda row: {c.name: str(getattr(row, c.name)) for c in row.__table__.columns})
#         name.append(row._asdict())
#     return json.dumps(name, cls=DecimalEncoder)

# Route to render index.html template


@app.route("/")
def index():

    # Return template and data
    return render_template("index.html")

# Route to render scatter.html template


@app.route("/scatter")
def scatter():

    # Return template and data
    return render_template("scatter.html")

# Route to render grid.html template


@app.route("/grid")
def grid():

    # Return template and data
    return render_template("grid.html")

# Route to render plotly.html template


@app.route("/plotly")
def plotly():

    # Return template and data
    return render_template("plotly.html")

# route to render map.html

@app.route("/map")
def map():

    # Return template and data
    return render_template("map.html")

@app.route("/line")
def line():

    # Return template and data
    return render_template("line.html")

if __name__ == "__main__":
    app.run(debug=True)
