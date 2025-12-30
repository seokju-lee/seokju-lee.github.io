---
layout: page
title: Interworking control for a Lower Limb Exoskeleton
description: Position-based knee-hip interworking control for a lower limb exoskeleton in lifting assistance
date: 2024-12-31
img: /assets/img/projects/exo/exo_project.jpg
tags: [Robot Control & Simulators]
summary: "This is a short one-line summary. Add a thumbnail at `assets/img/projects/<project>/...` and edit front-matter."
---

*Duration:* 2024.01 - 2024.12

***

### Project Overview

This research focuses on enhancing the lifting capabilities of industrial lower-limb exoskeletons. Specifically, it addresses the challenge of providing hip support in exoskeleton systems that are primarily actuated at the knee but have passive or under-actuated hip joints.

The project proposes a **Position-based Knee-Hip Interworking Control** strategy that leverages the natural kinematic coupling between the knee and hip joints during squat lifting motions.

<div class="project-figure" style="max-width: 60%;">
    <img src="/assets/img/projects/exo/exo_project.jpg" alt="Exoskeleton System">
    <span class="caption">Fig 1. Exoskeleton System</span>
</div>

### Key Research & Methodology

#### 1. Kinematic Correlation Analysis
We analyzed human motion data during lifting tasks to establish a linear correlation between knee extension and hip extension. This correlation serves as the foundation for predicting the necessary hip support based on knee motion.

#### 2. Interworking Control Strategy
Instead of adding heavy actuators to the hip, this project utilizes the actuators at the knee to indirectly support the hip joint.
* **Concept:** By controlling the knee joint based on the desired hip-knee relationship, the system manipulates the Ground Reaction Force (GRF) vector.
* **Mechanism:** The controller generates an assistive torque at the knee that creates a moment arm effective enough to reduce the load on the user's lower back (lumbar spine) during the lifting phase.

#### 3. Verification
<div class="project-figure" style="max-width: 60%;">
    <img src="/assets/img/projects/exo/experiment.jpg" alt="Experiment Setup">
    <span class="caption">Fig 2. Experiment Setup</span>
</div>
The effectiveness of the proposed control method was verified through surface Electromyography (sEMG) analysis.
* **Experiments:** Subjects performed lifting tasks with and without the proposed control.
* **Results:** The system demonstrated a reduction in muscle activity in key muscle groups, particularly the *Erector Spinae* and *Gluteus Maximus*, confirming that the knee actuation successfully compensated for the lack of active hip torque.