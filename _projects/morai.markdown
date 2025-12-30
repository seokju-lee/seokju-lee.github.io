---
layout: page
title: AI-Based Training Simulation Environment
description: Development AI agents for UGVs and drones using risk map-based planning an learning for a training simulator.
date: 2025-12-30
img: /assets/img/projects/morai/morai.png
tags: [Robot Control & Simulators]
summary: "This is a short one-line summary. Add a thumbnail at `assets/img/projects/<project>/...` and edit front-matter."
---

*Duration:* 2026.01 - present

***

### Project Overview

This project focuses on developing intelligent maneuvering agents for Unmanned Ground Vehicles (UGVs) and Unmanned Aerial Vehicles (UAVs) within a virtual training simulator (MORAI SIM). The goal is to create a realistic training environment where autonomous systems can perform tactical maneuvers in complex terrains.

<div class="project-figure" style="max-width: 80%;">
    <img src="/assets/img/projects/morai/morai.png" alt="Simulation Environment">
    <span class="caption">Fig 1. Simulation environment featuring UGV and UAV agents</span>
</div>

### Key Methodologies

The project implements distinct control strategies for the ground and aerial agents to maximize their operational efficiency.

#### 1. UGV: Risk Map-based Path Planning & Control
For the UGV, the core strategy involves analyzing the terrain to ensure stable mobility.
* **Risk Map Construction:** The agent analyzes sensor observation histories to create a "Risk Map" that accounts for terrain features such as slope, roughness, and obstacles.
* **Path Planning & Tracking:** Based on the generated risk map, the system calculates optimal paths using algorithms like A* and executes precise path tracking using **Model Predictive Control (MPC)**.

#### 2. UAV: RL-based Reconnaissance
The UAV agent acts as a scout to support the UGV.
* **Reinforcement Learning:** We utilize Reinforcement Learning (RL) to train the drone's flight policy.
* **Objective:** The agent learns scanning patterns that maximize area coverage for reconnaissance while simultaneously minimizing exposure to threats and avoiding collisions[cite: 9].

### System Architecture

The AI agents interact with the **MORAI SIM** platform through a dedicated bridge interface[cite: 10]. This architecture allows for real-time exchange of sensor data and control commands, enabling the rigorous testing of autonomous algorithms in a high-fidelity virtual environment[cite: 7, 10].

### Acknowledgement

This work was supported by the 