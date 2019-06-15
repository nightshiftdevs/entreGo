const express = require('express');

const create = () => async (req,res,next) => {
  try {
    const {
      ClientID,
      codDRIVER,
      cod_send,
      date_order,
      observation,
      cod_client,
      cod_send
    } = req.body;

    if (ClientID === undefined || ClientID === '') {
      return res.status(422).json({
          'code': 'REQUIRED_FIELD_MISSING',
          'description': 'ClientID is required',
          'field': 'ClientID'
      });
    }

    if (codDRIVER === undefined || codDRIVER === '') {
      return res.status(422).json({
          'code': 'REQUIRED_FIELD_MISSING',
          'description': 'observation is required',
          'field': 'observation'
      });
    }

    if (cod_send === undefined || cod_send === '') {
      return res.status(422).json({
          'code': 'REQUIRED_FIELD_MISSING',
          'description': 'observation is required',
          'field': 'observation'
      });
    }

    if (date_order === undefined || date_order === '') {
      return res.status(422).json({
          'code': 'REQUIRED_FIELD_MISSING',
          'description': 'order is required',
          'field': 'name'
      });
    }

    if (observation === undefined || observation === '') {
      return res.status(422).json({
          'code': 'REQUIRED_FIELD_MISSING',
          'description': 'observation is required',
          'field': 'observation'
      });
    }

    if (cod_client === undefined || cod_client === '') {
      return res.status(422).json({
          'code': 'REQUIRED_FIELD_MISSING',
          'description': 'observation is required',
          'field': 'observation'
      });
    }   

    if (cod_send === undefined || observation === '') {
      return res.status(422).json({
          'code': 'REQUIRED_FIELD_MISSING',
          'description': 'observation is required',
          'field': 'observation'
      });
    }
  }catch (error) {
    return res.status(500).json({
      'code': 'SERVER_ERROR',
      'descripcion': 'something went wrong, Please try again'
    });
  }
}

module.exports = create;
