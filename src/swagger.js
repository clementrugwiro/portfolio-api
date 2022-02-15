import dotenv from 'dotenv-flow';
dotenv.config();

const config = {
  swagger: '2.0',
  info: {
    version: '1.0.0.',
    title: 'Portfolio APIs documentation',
    description: '',
  },
  
  schemes: ['http', 'https'],
  securityDefinitions: {
    JWT  : {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  tags: [
    {
      name: 'portfolio APIS documentation',
    },
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths:{
    "/home": {
        "get": {
            "tags": ["Default"],
            "summary": "Default message on server",
            "operationId": "",
            "requestBody": {
            "description": "default router should return message",
            "content": {
                "application/json": {
                "schema": {}
                },
                "application/xml": {
                "schema": {}
                }
            },
            "required": false
            },
            "responses": {
            "200": {
                "description": "Message of successful request",
                "content": {}
            }
            },
            "x-codegen-request-body-name": "body"
        }
    },
    "/api/aarticles":{
        "get": {
            "tags": ["Default"],
            "summary": "Default message on server",
            "operationId": "",
            "requestBody": {
            "description": "default router should all articles that were created",
            "content": {
                "application/json": {
                "schema": {}
                },
                "application/xml": {
                "schema": {}
                }
            },
            "required": false
            },
            "responses": {
            "200": {
                "description": "Message of successful request",
                "content": {}
            }
            },
            "x-codegen-request-body-name": "body"
        }
    },
    "/api/articles":{
        "get": {
            "tags": ["Default"],
            "summary": "Default message on server",
            "operationId": "",
            "security": [{
              "JWT": [],
            }],
            "requestBody": {
            "description": "default router should all articles that were created",
            "content": {
                "application/json": {
                "schema": {}
                },
                "application/xml": {
                "schema": {}
                }
            },
            
            "required": false
            },
            "responses": {
            "403": {
                "description": "message of request when not Logged in ",
                "content": {}
            },
            "200": {
                "description": "Message of successful request",
                "content": {}
            }
            },
            "x-codegen-request-body-name": "body"
        }
    },
    "/api/articles/{id}":{
      "get": {
          "tags": ["Default"],
          "summary": "Default message on server",
          "parameters":[
           {
              "in": "path",
              "name": "id",
              "type": "string",
              "required": true,
              "description": "id of article"
            }
          ],
          "operationId": "",
          "security": [{
            "JWT": [],
          }],
          "requestBody": {
          "description": "default router should all articles that were created",
          "content": {
              "application/json": {
              "schema": {}
              },
              "application/xml": {
              "schema": {}
              }
          },
          
          "required": false
          },
          "responses": {
          "403": {
              "description": "message of request when not Logged in ",
              "content": {}
          },
          "200": {
              "description": "Message of successful request",
              "content": {}
          }
          },
          "x-codegen-request-body-name": "body"
      }
   },
    "/api/add-articles": {
      "post": {
        "tags": ["Default"],
        "summary": "creating an article",
        "description": "",
        "security": [{
          "JWT": [],
        }],
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "user information",
            "in": "body",
            "description": "The user's name",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "example": "HTML and CSS"
                },
                "content": {
                  "type": "string",
                  "example": "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, when the sun does set."
                },
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "User created successfully"
          },
          "400": {
            "description": "Incorrect information"
          },
          "403": {
            "description": "Email is already in use"
          }
        }
      },
      "x-codegen-request-body-name": "body"
    },
    "/api/del-articles/{id}":{
      "delete": {
          "tags": ["Default"],
          "summary": "article deleting",
          "parameters":[
           {
              "in": "path",
              "name": "id",
              "type": "string",
              "required": true,
              "description": "id of article"
            }
          ],
          "operationId": "",
          "security": [{
            "JWT": [],
          }],
          "requestBody": {
          "description": "default router should all articles that were created",
          "content": {
              "application/json": {
              "schema": {}
              },
              "application/xml": {
              "schema": {}
              }
          },
          
          "required": false
          },
          "responses": {
          "403": {
              "description": "message of request when not Logged in ",
              "content": {}
          },
          "200": {
              "description": "Message of successful request",
              "content": {}
          }
          },
          "x-codegen-request-body-name": "body"
      }
    },
    "/api/up-articles/{id}":{
        "patch": {
            "tags": ["Default"],
            "summary": "article updating",
            "parameters":[
             {
                "in": "path",
                "name": "id",
                "type": "string",
                "required": true,
                "description": "id of article"
              }
            ],
            "operationId": "",
            "security": [{
              "JWT": [],
            }],
            "requestBody": {
            "description": "default router should all articles that were created",
            "content": {
                "application/json": {
                "schema": {}
                },
                "application/xml": {
                "schema": {}
                }
            },
            
            "required": false
            },
            "responses": {
            "403": {
                "description": "message of request when not Logged in ",
                "content": {}
            },
            "200": {
                "description": "Message of successful request",
                "content": {}
            }
            },
            "x-codegen-request-body-name": "body"
        }
    },
    "/api/articles-like/{id}":{
      "post": {
          "tags": ["Default"],
          "summary": "article updating",
          "parameters":[
           {
              "in": "path",
              "name": "id",
              "type": "string",
              "required": true,
              "description": "id of article"
            }
          ],
          "operationId": "",
          "security": [{
            "JWT": [],
          }],
          "requestBody": {
          "description": "default router should all articles that were created",
          "content": {
              "application/json": {
              "schema": {}
              },
              "application/xml": {
              "schema": {}
              }
          },
          
          "required": false
          },
          "responses": {
          "403": {
              "description": "message of request when not Logged in ",
              "content": {}
          },
          "200": {
              "description": "Message of successful request",
              "content": {}
          }
          },
          "x-codegen-request-body-name": "body"
      }
  },
    "/api/add-users": {
        "post": {
          "tags": ["Default"],
          "summary": "manager signup",
          "description": "",
          "produces": ["application/json"],
          "parameters": [
            {
              "name": "user information",
              "in": "body",
              "description": "The user's name",
              "required": true,
              "schema": {
                "type": "object",
                "properties": {
                  "firstname": {
                    "type": "string",
                    "example": "Clement Pascal"
                  },
                  "lastname": {
                    "type": "string",
                    "example": "Nshimiye Rugwiro"
                  },
                  "username": {
                    "type": "string",
                    "example": "Rugwiro Clement"
                  },
                  "email": {
                    "type": "string",
                    "example": "hunkclement@gmail.com"
                  },
                  "password": {
                    "type": "string",
                    "example": "admin123"
                  },
                }
              }
            }
          ],
          "responses": {
            "201": {
              "description": "User created successfully"
            },
            "400": {
              "description": "Incorrect information"
            },
            "403": {
              "description": "Email is already in use"
            }
          }
        },
        "x-codegen-request-body-name": "body"
    },
    "/api/users/{id}":{
        "get": {
            "tags": ["Default"],
            "summary": "article deleting",
            "parameters":[
             {
                "in": "path",
                "name": "id",
                "type": "string",
                "required": true,
                "description": "id of article"
              }
            ],
            "operationId": "",
            "security": [{
              "JWT": [],
            }],
            "requestBody": {
            "description": "default router should all articles that were created",
            "content": {
                "application/json": {
                "schema": {}
                },
                "application/xml": {
                "schema": {}
                }
            },
            
            "required": false
            },
            "responses": {
            "403": {
                "description": "message of request when not Logged in ",
                "content": {}
            },
            "200": {
                "description": "Message of successful request",
                "content": {}
            }
            },
            "x-codegen-request-body-name": "body"
        }
    },
    "/api/del-users/{id}":{
      "delete": {
          "tags": ["Default"],
          "summary": "article deleting",
          "parameters":[
           {
              "in": "path",
              "name": "id",
              "type": "string",
              "required": true,
              "description": "id of article"
            }
          ],
          "operationId": "",
          "security": [{
            "JWT": [],
          }],
          "requestBody": {
          "description": "default router should all articles that were created",
          "content": {
              "application/json": {
              "schema": {}
              },
              "application/xml": {
              "schema": {}
              }
          },
          
          "required": false
          },
          "responses": {
          "403": {
              "description": "message of request when not Logged in ",
              "content": {}
          },
          "200": {
              "description": "Message of successful request",
              "content": {}
          }
          },
          "x-codegen-request-body-name": "body"
      }
    },
    "/api/up-users/{id}":{
      "patch": {
          "tags": ["Default"],
          "summary": "article deleting",
          "parameters":[
           {
              "in": "path",
              "name": "id",
              "type": "string",
              "required": true,
              "description": "id of article"
            }
          ],
          "operationId": "",
          "security": [{
            "JWT": [],
          }],
          "requestBody": {
          "description": "default router should all articles that were created",
          "content": {
              "application/json": {
              "schema": {}
              },
              "application/xml": {
              "schema": {}
              }
          },
          
          "required": false
          },
          "responses": {
          "403": {
              "description": "message of request when not Logged in ",
              "content": {}
          },
          "200": {
              "description": "Message of successful request",
              "content": {}
          }
          },
          "x-codegen-request-body-name": "body"
      }
      },
    "/api/messages":{
        "get": {
            "tags": ["MANAGER"],
            "summary": "Default message on server",
            "operationId": "",
            "security": [{
              "JWT": [],
            }],
            "requestBody": {
            "description": "default router should show all messages sent to the user",
            "content": {
                "application/json": {
                "schema": {}
                },
                "application/xml": {
                "schema": {}
                }
            },
            "required": false
            },
            "responses": {
            "200": {
                "description": "Message of successful request",
                "content": {}
            }
            },
            "x-codegen-request-body-name": "body"
        }
    },
    "/api/login":{
        "post": {
            "tags": ["Default"],
            "summary": "everyone login",
            "description": "",
            "produces": ["application/json"],
            "parameters": [
              {
                "name": "user information",
                "in": "body",
                "description": "The user's name",
                "required": true,
                "schema": {
                  "type": "object",
                  "properties": {
                    "email": {
                      "type": "string",
                      "example": "hunkclement@gmail.com"
                    },
                    "pwd": {
                      "type": "string",
                      "example": "admin123"
                    },
                  }
                }
              }
            ],
            "responses": {
              "201": {
                "description": "User logged in successfully"
              },
              "400": {
                "description": "Incorrect information"
              }
            }
          },
          "x-codegen-request-body-name": "body"
    },
    "/api/users":{
      "get": {
          "tags": ["MANAGER"],
          "summary": "Default message on server",
          "operationId": "",
          "security": [{
            "JWT": [],
          }],
          "requestBody": {
          "description": "default router should show all messages sent to the user",
          "content": {
              "application/json": {
              "schema": {}
              },
              "application/xml": {
              "schema": {}
              }
          },
          "required": false
          },
          "responses": {
          "200": {
              "description": "Message of successful request",
              "content": {}
          }
          },
          "x-codegen-request-body-name": "body"
      }
    },
    "/api/messages":{
    "post": {
        "tags": ["Default"],
        "summary": "sending a message to the administrator",
        "description": "",
        "produces": ["application/json"],
        "parameters": [
          {
            "name": "user information",
            "in": "body",
            "description": "The user's name",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "uname": {
                  "type": "string",
                  "example": "niyonsenga eric"
                },
                "email": {
                  "type": "string",
                  "example": "hunkclement@gmail.com"
                },
                "subject": {
                  "type": "string",
                  "example": "akinf for contacts"
                },
                "message": {
                  "type": "string",
                  "example": "I understand that it may be against your policy in providing the contact details of a client to an outside organisation, but I assure you that his details will not be misused and will be handled with great care and caution."
                },
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "User logged in successfully"
          },
          "400": {
            "description": "Incorrect information"
          }
        }
      },
      "x-codegen-request-body-name": "body"
    },
    "/api/messages/{id}":{
      "delete": {
          "tags": ["Default"],
          "summary": "message deleting",
          "parameters":[
           {
              "in": "path",
              "name": "id",
              "type": "string",
              "required": true,
              "description": "id of article"
            }
          ],
          "operationId": "",
          "security": [{
            "JWT": [],
          }],
          "requestBody": {
          "description": "default router should all articles that were created",
          "content": {
              "application/json": {
              "schema": {}
              },
              "application/xml": {
              "schema": {}
              }
          },
          
          "required": false
          },
          "responses": {
          "403": {
              "description": "message of request when not Logged in ",
              "content": {}
          },
          "200": {
              "description": "Message of successful request",
              "content": {}
          }
          },
          "x-codegen-request-body-name": "body"
      }
      },
  },
};
export default config;