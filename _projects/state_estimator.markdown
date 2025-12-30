---
layout: page
title: Legged Robot State Estimation
description: State estimation for legged robots using hybrid Kalman filter.
date: 2025-12-30
img: /assets/img/projects/state_estimator/attennkf.png
duration: "2024.03 - 2025.10"
tags: [State Estimation, Quadruped Robot, Supervised Learning]
category: Legged robotics
summary: "This is a short one-line summary. Add a thumbnail at `assets/img/projects/<project>/...` and edit front-matter."
---

*Duration:* 2024.03 - 2025.10

***

### Project Overview

This project focuses on developing robust state estimation algorithms for legged robots by integrating **Model-based Filtering** with **Deep Learning**. The research aims to overcome the limitations of model-based filters caused by dynamic uncertainties (e.g., foot slippage) and measurement noise.

This research consists of two main approaches:
1.  **Invariant Neural-Augmented Kalman Filter (InNKF)**: Combining Invariant EKF with a neural compensator to correct the **posterior state**.
2.  **Attention-Based Neural Augmented Kalman Filter (AttenNKF)**: Utilizing an attention mechanism to estimate the slip-induced error in the posterior estimate.

---

### 1. Invariant Neural-Augmented Kalman Filter (IROS 2025)

**Title:** Legged Robot State Estimation Using Invariant Neural-Augmented Kalman Filter with a Neural Compensator


<div class="project-figure" style="max-width: 80%;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/k1ZVb6Xj8D8" title="State Estimation Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <span class="caption">Video 1. InNKF Supplementary Video</span>
</div>


We proposed a novel state estimation framework, the **Invariant Neural-Augmented Kalman Filter (InNKF)**, which combines the theoretical guarantees of the **Right-Invariant Extended Kalman Filter (RI-EKF)** with a data-driven neural compensator.

* **Key Idea:** While the RI-EKF ensures state-independent error dynamics, its performance degrades when assumptions (like stationary foot contact) are violated. Instead of modeling complex slip dynamics explicitly, we utilize a neural network to compensate for the estimation error directly in the **posterior state**.
* **Methodology:**
    * **Base Filter:** The state is defined on the Lie Group $SE_2(3)$, and the filter operates as a Right-Invariant EKF.
    * **Neural Compensator:** We employ a **Temporal Convolutional Network (TCN)** that takes invariant proprioceptive sensor history as input. The network estimates the **posterior estimation error** (the error remaining after the Kalman update step).
    * **Compensation:** This estimated error is injected back into the filter to correct the posterior state estimate ($\hat{X}_{k}^{+}$), effectively removing drift caused by unmodeled dynamics like slippage.
* **Result:** The method significantly outperformed standard EKFs and vanilla neural filters by leveraging the geometric structure of the state space to learn a consistent error correction term.

**Publication:**
```bibtex
@INPROCEEDINGS{lee2025legged,
  author={Lee, Seokju and Kim, Hyun-Bin and Kim, Kyung-Soo},
  booktitle={2025 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)}, 
  title={Legged Robot State Estimation Using Invariant Neural-Augmented Kalman Filter with a Neural Compensator}, 
  year={2025},
  pages={15445-15452},
  keywords={Legged locomotion;Accuracy;Lie groups;Artificial neural networks;Real-time systems;Motion capture;Kalman filters;State estimation;Intelligent robots;Convergence},
  doi={10.1109/IROS60139.2025.11247668}}
```

### 2. Attention-Based Neural Augmented Kalman Filter

**Title:** Attention-Based Neural Augmented Kalman Filter for Legged Robot State Estimation
*(Status: Under Review)*

Following the previous research (InNKF), this study focuses on enhancing the performance of the state error estimation by improving the neural network architecture.

* **Problem:** While the previous methods (like TCN or GRU-based InNKF) effectively estimated state errors, they treated the temporal sequence of sensor data with a fixed inductive bias. This limited their ability to selectively focus on critical asynchronous events—such as the exact moment of slip onset or impact—within the observation window.
* **Solution:** We proposed the **Attention-Based Neural Augmented Kalman Filter (Atten-NKF)**, integrating a **Self-Attention** mechanism.
    * **Posterior State Error Estimation:** Similar to the InNKF, the network's goal is to explicitly estimate the **posterior estimation error** (the residual error remaining in the state after the Kalman update) caused by unmodeled dynamics like foot slippage.
    * **Attention Mechanism:** Unlike RNNs or CNNs, the attention mechanism analyzes the global dependencies in the sensor history. It allows the network to dynamically assign higher weights to significant time steps (e.g., slip occurrences), enabling more accurate error prediction.
* **Performance:** The attention mechanism significantly improved the accuracy of the state error estimation compared to TCN/GRU-based baselines, leading to robust localization on challenging terrains with frequent contact failures.

---

### Acknowledgement

This research was conducted as a Master's thesis.