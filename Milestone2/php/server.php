<?php
  header('Content-Type: application/json');
  include 'db.php';
  $labels = [];
  $sales = [];
  foreach ($graphs["fatturato_by_agent"]["data"] as $nameAgent => $value) {
    $labels[] = $nameAgent;
    $sales[] = $value;
  }
  $myData=[
    "fatturato" => $graphs["fatturato"],
    "typeAgents" => "pie",
    "labels"    => $labels,
    "sales"      => $sales
  ];
  echo json_encode($myData);
