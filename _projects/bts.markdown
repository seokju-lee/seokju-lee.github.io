---
layout: page
title: Development of Self-Driving Technology
description: Using RTAB-Map and SLAM for autonomous navigation of a unmanned ground vehicle for non face-to-face delivery services.
date: 2022-12-31
img: /assets/img/projects/bts/bts.png
tags: [ROS, SLAM, Computer Vision]
category: Autonomous & Mobile Robots
summary: "This is a short one-line summary. Add a thumbnail at `assets/img/projects/<project>/...` and edit front-matter."
---

*Duration:* 2022.06 - 2022.12

***

### Project Overview

This project focuses on developing an autonomous driving platform technology specifically designed for non-face-to-face delivery services. Motivated by the surge in delivery demand due to COVID-19 and the safety issues associated with motorcycle deliveries, we aimed to create a safe and efficient robot delivery solution.

The system addresses the issue of high delivery fees and minimum order amounts often faced by university students by implementing a "Ride Sharing" concept for delivery items.

<div class="project-figure" style="max-width: 60%;">
    <img src="/assets/img/projects/bts/robot_platform.png" alt="Simulation Environment">
    <span class="caption">Fig 1. Scout-mini platform equipped with LiDAR and IMU sensors</span>
</div>
### Key Features & Objectives

* **Autonomous Navigation:** Implementing reliable self-driving capabilities using Visual SLAM, Object Detection, and Lane Detection.
* **Sensor Fusion:** Securing price competitiveness by fusing data from various sensors, including LiDAR and IMU.
* **Ride-Sharing Algorithm:** A core algorithm designed to optimize delivery routes for multiple orders, reducing costs for the end-user.

### System Architecture

<div class="project-figure" style="max-width: 80%;">
    <img src="/assets/img/projects/bts/architecture.png" alt="Simulation Environment">
    <span class="caption">Fig 1. System Architecture</span>
</div>

The project was developed using **ROS (Robot Operating System)** and validated in both simulation and the real world.

1. **Simulation:** We utilized **Gazebo** to implement and test the main algorithms before real-world deployment.
2. **Path Planning:** The system uses the **DWA (Dynamic Window Approach)** algorithm for effective obstacle avoidance and navigation.
3. **Hardware:** The platform is built upon the **Scout-mini** mobile robot base.

### Application Development

<div class="project-figure" style="max-width: 40%;">
    <img src="/assets/img/projects/bts/application.png" alt="Simulation Environment">
    <span class="caption">Fig 2. The "N-bbang" delivery community application</span>
</div>

To complete the service ecosystem, we developed a mobile application named **"N-bbang"**.
* **Function:** A location-based community app that allows users to group orders to save on delivery costs.
* **Tech Stack:** Built using **React Native** and **AWS**.
* **Integration:** The app interlocks with the self-driving robot to coordinate pickup and delivery.

### Results
<div class="project-figure" style="max-width: 50%;">
    <img src="/assets/img/projects/bts/result.png" alt="Simulation Environment">
    <span class="caption">Fig 3. Scout-mini in Gazebo simulator</span>
</div>

<div class="project-figure" style="max-width: 80%;">
    <img src="/assets/img/projects/bts/bts.png" alt="Simulation Environment">
    <span class="caption">Fig 4. Real-world Scout-mini using RTAB-Map</span>
</div>

Implement the main algorithm using Gazebo simulator and validate the system in the real world.

### Acknowledgement

This project was conducted as part of the Internship at UNIST RML / UNIST Brain-To-Society Contest.