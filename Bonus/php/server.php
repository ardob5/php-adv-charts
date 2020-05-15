<?php
  header('Content-Type: application/json');
  include 'db.php';

  // CHART ONE
  $guestGraph = $graphs['fatturato'];

  // CHART TWO
  $agentsGraph = $graphs['fatturato_by_agent'];

  $nameAgent = [];
  $salesAgent = [];
  foreach ($agentsGraph as $agent => $sales) {
    $nameAgent[] = $agent;
    $salesAgent[] = $sales;
  };

  $agentsGraph['labels'] = $nameAgent;
  $agentGraph['data'] = $sales;



  $permits = $_GET['accessLevel'];
  $data = [];
