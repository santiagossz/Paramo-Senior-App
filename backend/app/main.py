
from typing import Optional
from fastapi import FastAPI, File,Query,Form

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Paramo-Senior",version="1.0")


origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)



@app.get("/")
def read_root():
    return {"Status app": "working"}


@app.post("/perfil")
async def ps(
    perfil:dict
    ):

    return  perfil['perfil']
