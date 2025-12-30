---
layout: page
title: Learning Legged Mobile Manipulator
description: Reinforcement learning for control a legged mobile manipulator.
date: 2022-12-31
img: /assets/img/projects/legged_manipulator/legged_manipulator.png
tags: [Raisim, Quadruped Robot, Reinforcement Learning]
category: Legged robotics
summary: "This is a short one-line summary. Add a thumbnail at `assets/img/projects/<project>/...` and edit front-matter."
---

*Duration:* 2022.06 - 2022.12

***

### Project Overview

This study investigates the possibility of using a reinforcement learning strategy to control the end-effector of a legged mobile manipulator to extend its workspace and address complex contact dynamics. We aim to overcome the computational inefficiency of traditional model-based controllers and propose a whole-body control framework that integrates locomotion and manipulation.

<div class="project-figure" style="max-width: 80%;">
    <img src="/assets/img/projects/legged_manipulator/legged_manipulator_architecture.png" alt="Simulation Environment">
    <span class="caption">Fig 1. System Architecture</span>
</div>

### System Configuration

* **Robot Platform:** A combination of the ANYmal C (quadruped robot) and a 6-DOF UR5 manipulator, resulting in a system with 18 actuated degrees of freedom.
* **Simulator:** The Raisim simulator was used to model the robot dynamics.
* **Algorithm:** Proximal Policy Optimization (PPO) was utilized as the reinforcement learning algorithm.

### Experiments & Results

We conducted two main experiments to verify the proposed framework:

1.  **Locomotion with Manipulator Control:** We attempted to control all 18 joints directly using reinforcement learning. The results indicated that this approach was inferior to existing model-based control methods.
2.  **End-Effector Tracking:** We trained the agent to track the desired position of the end-effector.

The results showed that the tracking error decreased and converged over time, confirming that the manipulator control was effective. This demonstrates the feasibility of whole-body learning-based control where both the legs and the arm optimize torque simultaneously to achieve the task.

### Acknowledgement

This work is conducted during an intership at KAIST RAI Lab, and was supported by the Ministry of Trade, Industry and Energy and Defense Acquisition Program Administration (DAPA) under Project Number 22-CM-GU-11.

### BibTeX

```bibtex
@inproceedings{lee2022learning,
  title={Learning legged mobile manipulation using reinforcement learning},
  author={Lee, Seokju and Jeon, Seunghun and Hwangbo, Jemin},
  booktitle={International Conference on Robot Intelligence Technology and Applications},
  pages={310--317},
  year={2022},
  organization={Springer}
}
```

