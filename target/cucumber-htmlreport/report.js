$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sample banking acceptance criteria.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Sample feature file for Behavior-Driven Testing and Development training"
    },
    {
      "line": 2,
      "value": "#Author: Fernanda Menks - fernanda.menks@accenture.com"
    },
    {
      "line": 3,
      "value": "#Creation date: July 31, 2016"
    }
  ],
  "line": 4,
  "name": "Manage simple transactions in a banking account",
  "description": "       In order to manage my money more efficiently\r\n       As a bank client\r\n       TC_001: I want to make a deposit and withdraw money whenever I need to\r\n       TC_002: I want to make a transfer to another bank account whenever I need to\r\n       TC_003: I want to make a transfer to an international bank account",
  "id": "manage-simple-transactions-in-a-banking-account",
  "keyword": "Feature"
});
formatter.background({
  "comments": [
    {
      "line": 11,
      "value": "#Login information for generic user so all scenarios will use the same starting point"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a user access the bank web app",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "logs using the credentials",
  "rows": [
    {
      "cells": [
        "bank_id",
        "username",
        "password",
        "url"
      ],
      "line": 15
    },
    {
      "cells": [
        "25967",
        "banker",
        "training",
        "http://www.mykidsbank.org"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AC001_SampleBanking_StepDefinition.a_user_access_the_bank_web_app()"
});
formatter.result({
  "duration": 554533374,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.accenture.cucumber.Giovanni_BDD.AC001_SampleBanking_StepDefinition.a_user_access_the_bank_web_app(AC001_SampleBanking_StepDefinition.java:11)\r\n\tat ✽.Given a user access the bank web app(Sample banking acceptance criteria.feature:13)\r\n",
  "status": "pending"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 19,
  "name": "Make a deposit",
  "description": "",
  "id": "manage-simple-transactions-in-a-banking-account;make-a-deposit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@TC_001"
    },
    {
      "line": 18,
      "name": "@in_progress"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "my checking account has balance equal or greater than zero",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I deposit 1500 to my checking account",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should have additional 1500 as balance",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 24,
      "value": "# Include here the parametrization and data for positive and negative test"
    }
  ],
  "line": 28,
  "name": "Make a withdraw",
  "description": "",
  "id": "manage-simple-transactions-in-a-banking-account;make-a-withdraw",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@TC002"
    },
    {
      "line": 27,
      "name": "@signed-off"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "my checking account has a balance greater than \u003cwithdrawn_amount\u003e before withdraw",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I withdraw \u003cwithdrawn_amount\u003e from my checking account",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should have less \u003cwithdrawn_amount\u003e as balance",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "manage-simple-transactions-in-a-banking-account;make-a-withdraw;",
  "rows": [
    {
      "cells": [
        "withdrawn_amount"
      ],
      "line": 34,
      "id": "manage-simple-transactions-in-a-banking-account;make-a-withdraw;;1"
    },
    {
      "cells": [
        "250"
      ],
      "line": 35,
      "id": "manage-simple-transactions-in-a-banking-account;make-a-withdraw;;2"
    },
    {
      "cells": [
        "1000"
      ],
      "line": 36,
      "id": "manage-simple-transactions-in-a-banking-account;make-a-withdraw;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 11,
      "value": "#Login information for generic user so all scenarios will use the same starting point"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a user access the bank web app",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "logs using the credentials",
  "rows": [
    {
      "cells": [
        "bank_id",
        "username",
        "password",
        "url"
      ],
      "line": 15
    },
    {
      "cells": [
        "25967",
        "banker",
        "training",
        "http://www.mykidsbank.org"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AC001_SampleBanking_StepDefinition.a_user_access_the_bank_web_app()"
});
formatter.result({
  "duration": 489192,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.accenture.cucumber.Giovanni_BDD.AC001_SampleBanking_StepDefinition.a_user_access_the_bank_web_app(AC001_SampleBanking_StepDefinition.java:11)\r\n\tat ✽.Given a user access the bank web app(Sample banking acceptance criteria.feature:13)\r\n",
  "status": "pending"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 35,
  "name": "Make a withdraw",
  "description": "",
  "id": "manage-simple-transactions-in-a-banking-account;make-a-withdraw;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@TC002"
    },
    {
      "line": 27,
      "name": "@signed-off"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "my checking account has a balance greater than 250 before withdraw",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I withdraw 250 from my checking account",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should have less 250 as balance",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "comments": [
    {
      "line": 11,
      "value": "#Login information for generic user so all scenarios will use the same starting point"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "a user access the bank web app",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "logs using the credentials",
  "rows": [
    {
      "cells": [
        "bank_id",
        "username",
        "password",
        "url"
      ],
      "line": 15
    },
    {
      "cells": [
        "25967",
        "banker",
        "training",
        "http://www.mykidsbank.org"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "AC001_SampleBanking_StepDefinition.a_user_access_the_bank_web_app()"
});
formatter.result({
  "duration": 589623,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.accenture.cucumber.Giovanni_BDD.AC001_SampleBanking_StepDefinition.a_user_access_the_bank_web_app(AC001_SampleBanking_StepDefinition.java:11)\r\n\tat ✽.Given a user access the bank web app(Sample banking acceptance criteria.feature:13)\r\n",
  "status": "pending"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 36,
  "name": "Make a withdraw",
  "description": "",
  "id": "manage-simple-transactions-in-a-banking-account;make-a-withdraw;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@TC002"
    },
    {
      "line": 27,
      "name": "@signed-off"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "my checking account has a balance greater than 1000 before withdraw",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I withdraw 1000 from my checking account",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should have less 1000 as balance",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});