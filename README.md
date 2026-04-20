# Automated Video Generation using n8n + ComfyUI

Welcome to the ultimate automated video generation project built with **n8n** and **ComfyUI**. This repository combines creative AI-driven image generation, audio generation, and video assembly into a workflow-ready pipeline.

---

## What’s inside

- `ComfyUI_Workflow/` - ComfyUI workflow definitions for generating assets and image-based scenes
- `n8n_Workflow/` - n8n workflow and payloads for orchestrating the automation
- `imgs/` - visual references and workflow diagrams
- `GenAIProject.mp4` - sample video output showing the pipeline in action

---

## Project structure

### ComfyUI_Workflow
- `AudioGenComfyUI.json` - ComfyUI workflow for generating audio assets
- `ImageGen.json` - ComfyUI workflow for generating images

### n8n_Workflow
- `ComfyUI_n8n_json2video.json` - n8n workflow for converting JSON output into final video
- `ComfyUI - Sheet1.csv` - supporting sheet for CSV-based automation
- `API Payloads/` - prebuilt API payload templates for ComfyUI calls
- `Code Nodes/` - custom JavaScript nodes for drive and file info utilities

### imgs
- `AudioGenComfyUI_Workflow.png` - audio generation workflow diagram
- `ImageGenComfyUI_Workflow.png` - image generation workflow diagram
- `Workflow_Final_n8n.png` - final n8n automation architecture
- `ComfyUI_Assets_GenAI.png` - asset generation overview

---

## Visual overview

### Audio generation workflow

<img src="imgs\AudioGenComfyUI_Workflow.png">

### Image generation workflow

<img src="imgs\ImageGenComfyUI_Workflow.png">


### Final n8n automation flow

<img src="imgs\Workflow_Final_n8n.png">

### ComfyUI asset generation overview

<img src="imgs\ComfyUI_Assets_GenAI.png">

---

## Sample output


https://github.com/user-attachments/assets/3afe326b-fec6-437f-8030-19711172c119


---

## How to use

1. Open the `ComfyUI_Workflow` folder in ComfyUI.
2. Load `ImageGen.json` and `AudioGenComfyUI.json` to generate visuals and audio.
3. Open the `n8n_Workflow` folder in n8n.
4. Import `ComfyUI_n8n_json2video.json` to connect the asset generation outputs and build your video.
5. Use the payloads in `n8n_Workflow/API Payloads/` to configure your ComfyUI requests.

---

## Notes

- This is a demo-level automation pipeline tuned for rapid multimedia generation.
- The sample video is included to demonstrate the completed video output.
- You can customize the ComfyUI JSON workflows and n8n payloads to match your own prompts, styles, and output formats.

---

## Why this project is a banger

This repository turns creative AI workflows into a repeatable pipeline. With end-to-end integration between ComfyUI and n8n, you can rapidly go from concept to generated video using structured automation.

Enjoy building your next AI-powered video experience!
