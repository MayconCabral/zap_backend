const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../src/api');
const token = require('../index');