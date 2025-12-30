---
layout: page
title: Control 6-dof Robot Manipulator
description: Modeling and Kinematic Control of a 6-DOF Robot Manipulator
date: 2021-12-31
img: /assets/img/projects/manipulator/manipulator.png
duration: "2021.09 - 2021.12"
category: Robot Control & Simulators
tags: [MATLAB, Simulink, Kinematics]
summary: "This is a short one-line summary. Add a thumbnail at `assets/img/projects/<project>/...` and edit front-matter."
---

*Duration:* 2021.09 - 2021.12

***

### Project Overview

This project focuses on the **kinematic modeling and control** of a custom 6-DOF robot manipulator. The primary goal was to derive the kinematic equations, implement them in code, and verify the robot's motion capabilities in a simulation environment.



### 1. Robot Modeling

<div class="project-figure" style="max-width: 70%;">
    <img src="/assets/img/projects/manipulator/dh_param.png" alt="Simulation Environment">
    <span class="caption">Fig 1. Denavit-Hartenberg Parameters</span>
</div>
* **D-H Parameters:** Defined the robot's geometry using **Denavit-Hartenberg (D-H) parameters**. Coordinate frames were assigned to each link to establish the transformation matrices.
* **URDF:** Created a **Universal Robot Description Format (URDF)** file to represent the robot's physical structure for the PyBullet simulation.

### 2. Kinematics

* **Forward Kinematics (FK):** Derived the homogeneous transformation matrices to calculate the position and orientation of the end-effector relative to the base frame given the joint angles.
* **Inverse Kinematics (IK):** Implemented an analytical solution to compute the required joint angles to reach a desired end-effector position and orientation. This involved solving geometric equations to map the task space coordinates back to the joint space.

### 3. Motion Planning & Simulation

* **Trajectory Generation:** Designed algorithms to generate smooth paths for the end-effector to follow specific geometric shapes.
* **Verification:** Validated the kinematic model by making the robot draw shapes such as a **square** and a **circle** in the simulation. The simulation confirmed that the IK solver correctly computed the joint configurations for the defined trajectories.

<div class="project-figure" style="max-width: 60%;">
    <img src="/assets/img/projects/manipulator/simulation_robotarm.png" alt="Simulation Environment">
    <span class="caption">Fig 2. Simulation of the 6-DOF manipulator following a trajectory</span>
</div>

### Acknowledgement

This research was conducted in the MEN461 Introduction to Robotics course at UNIST.
