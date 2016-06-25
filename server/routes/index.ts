/// <reference path="../typings/tsd.d.ts"/>
import {Request, Response} from "express";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: Function) {
  res.render('index', { title: 'Express' })
});

router.get('/ping',(req: Request, res:Response) => {
  res.send('pong');
});

module.exports = router;
