---
layout: page
title: F1Tenth Autonomous Racing
description: SLAM and pure pursuit control for F1Tenth racing.
date: 2021-12-31
img: /assets/img/projects/f1tenth/f1tenth.png
tags: [ROS, SLAM, Path Planning, Path Tracking]
category: Autonomous & Mobile Robots
summary: "This is a short one-line summary. Add a thumbnail at `assets/img/projects/<project>/...` and edit front-matter."
---

*Duration:* 2021.09 - 2021.12

***

### Project Overview

This project involves developing autonomous driving algorithms for a 1/10th scale race car using the **F1Tenth** platform. The goal was to implement reactive safety controllers, path planning, and localization algorithms to achieve high-speed navigation on a race track.

### 1. Reactive Methods: Wall & Gap Following

To handle dynamic environments and obstacle avoidance without a global map, I implemented reactive control strategies based on LiDAR data.

* **Wall Following:** Implemented a PID controller to maintain a fixed distance from the wall, allowing the car to navigate corridors and simple tracks.
* **Gap Following:** Developed a "Follow the Gap" algorithm. This method analyzes the LiDAR scan to identify the largest disparity (free space) and steers the robot towards the center of that gap to avoid obstacles.

<div style="display: flex; justify-content: space-between;">
    <div style="width: 48%;">
        <p><strong>Wall Following Demo</strong></p>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/PHuN5zQXp-U" title="Wall Following Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div style="width: 48%;">
        <p><strong>Gap Following Demo</strong></p>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/x7D6f7-DHt0" title="Gap Following Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

### 2. Path Tracking: Pure Pursuit Controller

For precise path tracking, I implemented the **Pure Pursuit** controller.
* **Algorithm:** This geometric path tracking controller calculates the steering angle required to reach a specific "lookahead point" on the reference path from the robot's current position.
* **Tuning:** The performance relies heavily on tuning the **lookahead distance ($l_d$)**. A short lookahead distance results in oscillation, while a long lookahead distance causes corner-cutting (poor tracking). I optimized this parameter for smooth cornering at higher speeds.

<div class="project-figure" style="max-width: 80%;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/drSO9w005Sg" title="Pure Pursuit Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <span class="caption">Video 3. Pure Pursuit Simulation Video</span>
</div>

### 3. Localization: Particle Filter (MCL)

To enable high-speed racing on a known map, robust state estimation is required.
* **Particle Filter:** I utilized a Particle Filter (Monte Carlo Localization) to estimate the robot's pose ($x, y, \theta$) in real-time.
* **Process:** The filter maintains a set of particles representing possible poses. These particles are updated based on control inputs (motion update) and resampled based on how well their simulated LiDAR scans match the real sensor data (measurement update).

### 4. High-Speed Racing

By combining the localized pose with the Pure Pursuit controller, the vehicle successfully performed high-speed laps. Below is the map used for the final racing demonstration.

<div class="project-figure" style="max-width: 80%;">
    <img src="/assets/img/projects/f1tenth/f1tenth.png" alt="Simulation Environment">
    <span class="caption">Fig 1. Occupancy Grid Map used for high-speed navigation</span>
</div>

### Acknowledgement

This research was conducted in the MEN491 Creating Autonomous Car course at UNIST.

[GitHub Repository](https://github.com/seokju-lee/UNIST_MEN491_Team3)