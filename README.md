# SMART-SUGGEST-AI
AI POWERED SMART RECOMMENDATION SYSTEM 

## Agentic AI-Based Cross-Domain Explainable Recommendation System

CrossRec-XAI is an intelligent **cross-domain recommendation platform** that uses Agentic AI, multi-behavior user modeling, semantic retrieval, hybrid recommendation, and Explainable AI to provide personalized recommendations.

The system learns from user **searches, product views, ratings, reviews, wishlist activity, and interaction history**. It transfers meaningful preferences across different domains and continuously improves recommendations using user feedback.

---

## 🚀 Key Features

### 🤖 Agentic AI Recommendation

A multi-agent architecture coordinates the recommendation workflow:

* Orchestrator Agent
* Query Understanding Agent
* User Behavior Agent
* Preference Agent
* Review Intelligence Agent
* Cross-Domain Agent
* Product Retrieval Agent
* Ranking Agent
* Price Intelligence Agent
* Critic Agent
* Explanation Agent
* Conversational Chat Agent
* Image Generation Agent

---

### 🌐 Cross-Domain Recommendation

The system can transfer user preferences between domains.

Supported example domains:

* Electronics
* Books
* Movies
* Fashion
* Travel
* Lifestyle

Example:

```text
Electronics Interest
        ↓
Technology Preference
        ↓
Cross-Domain Agent
        ↓
Technology Books
        ↓
Personalized Recommendations
```

This helps address **cross-domain cold-start problems**.

---

## 🧠 Multi-Behavior User Modeling

CrossRec-XAI analyzes multiple user signals:

| Behavior      | Purpose                        |
| ------------- | ------------------------------ |
| Search        | Identifies current intent      |
| Views         | Measures implicit interest     |
| View Duration | Measures engagement            |
| Ratings       | Explicit preference            |
| Reviews       | Sentiment and feature analysis |
| Wishlist      | Strong interest                |
| Purchase      | Strong behavioral signal       |
| Chat          | Current conversational intent  |

The system combines these signals to create a dynamic user preference profile.

---

## 🔍 Hybrid Recommendation Engine

The recommendation engine combines:

```text
Content-Based Filtering
          +
Collaborative Filtering
          +
Semantic Similarity
          +
Behavioral Signals
          +
Cross-Domain Relevance
          +
Price Compatibility
          +
Diversity
```

This produces personalized ranked recommendations instead of relying on a single recommendation technique.

---

## 💡 Explainable AI

Every recommendation provides a transparent explanation.

Example:

> **Why this was recommended**

```text
✓ You recently searched for wireless headphones.
✓ You viewed similar products several times.
✓ You rated related audio products highly.
✓ The product matches your preferred price range.
✓ Similar users showed positive interaction with this product.
```

Explanations are generated from actual recommendation evidence.

The system must never invent user behavior.

---

## 💬 AI Chat Assistant

CrossRec-XAI includes a conversational recommendation assistant.

Users can ask:

```text
"I need headphones under ₹5000."

"Show me something cheaper."

"Recommend something similar."

"Why did you recommend this?"

"Compare the first two products."

"Show me products suitable for travel."

"Recommend something from another domain."
```

The assistant maintains conversational context and sends appropriate requests to the recommendation agents.

---

## 💰 Price Intelligence

Users can define their preferred price range.

Example:

```text
Minimum Price: ₹2,000
Maximum Price: ₹8,000
```

Supported features:

* Minimum price
* Maximum price
* Budget-based recommendations
* Price sorting
* Discount filtering
* Lowest-price alternatives
* Best-value recommendations

Natural-language price queries are also supported.

Example:

> "Show me products between ₹3,000 and ₹7,000."

The system extracts the price constraints automatically.

---

## 🖼️ AI Image Generation

The project includes an optional **Image Generation Agent**.

It can generate:

* Conceptual product visuals
* Personalized product-use scenarios
* Recommendation visuals
* AI-generated concept images

Generated images must be clearly labelled:

**AI Generated / Conceptual Visualization**

AI-generated images must not be presented as authentic product photographs.

---

# 🏗️ System Architecture

```text
                         USER
                           │
                           ▼
                    ┌─────────────┐
                    │  AI CHAT    │
                    │  ASSISTANT  │
                    └──────┬──────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │  ORCHESTRATOR   │
                  │      AGENT      │
                  └────────┬────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
   Query Agent       Behavior Agent     Preference Agent
        │                  │                  │
        └──────────────────┼──────────────────┘
                           ▼
                  Cross-Domain Agent
                           │
                           ▼
                  Retrieval Agent
                           │
                           ▼
                    Candidate Items
                           │
                           ▼
                    Ranking Agent
                           │
                           ▼
                     Price Agent
                           │
                           ▼
                    Critic Agent
                           │
                           ▼
                  Explanation Agent
                           │
                           ▼
                  FINAL RECOMMENDATIONS
                           │
                           ▼
                       FEEDBACK
                           │
                           ▼
                  USER PROFILE UPDATE
```

---

# 🛠️ Technology Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

## Backend

* Python
* FastAPI

## Agent Framework

* LangGraph

## Machine Learning

* Pandas
* NumPy
* Scikit-learn

## NLP / Embeddings

* Sentence Transformers
* LLM-based review analysis
* Sentiment analysis

## Vector Search

* FAISS

## Database

* PostgreSQL
* Supabase

## Visualization

* Recharts
* Plotly

## AI Image Generation

* Configurable image-generation API/model

---

# 📂 Project Structure

```text
crossrec-xai/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── styles/
│
├── backend/
│   ├── agents/
│   │   ├── orchestrator.py
│   │   ├── behavior_agent.py
│   │   ├── preference_agent.py
│   │   ├── review_agent.py
│   │   ├── cross_domain_agent.py
│   │   ├── query_agent.py
│   │   ├── retrieval_agent.py
│   │   ├── ranking_agent.py
│   │   ├── price_agent.py
│   │   ├── critic_agent.py
│   │   ├── explanation_agent.py
│   │   ├── chat_agent.py
│   │   └── image_agent.py
│   │
│   ├── api/
│   ├── recommender/
│   ├── embeddings/
│   ├── database/
│   ├── models/
│   └── utils/
│
├── data/
│   ├── raw/
│   ├── processed/
│   └── synthetic/
│
├── notebooks/
│   ├── 01_eda.ipynb
│   ├── 02_preprocessing.ipynb
│   ├── 03_embeddings.ipynb
│   ├── 04_recommendation.ipynb
│   └── 05_evaluation.ipynb
│
├── evaluation/
├── generated_images/
├── tests/
├── supabase/
│   └── schema.sql
│
├── .env.example
├── .gitignore
├── requirements.txt
├── docker-compose.yml
└── README.md
```

---

# 📊 Dataset

The project uses multiple datasets to create a cross-domain recommendation environment.

Example datasets:

```text
Amazon Reviews
Google Books
Additional Product/Review Datasets
Synthetic Multi-Behavior Interactions
```

The processed dataset contains product information such as:

```text
product_id
domain
category
product_name
brand
description
price
discount
final_price
rating
availability
```

Behavioral data includes:

```text
user_id
product_id
event_type
search_query
view_duration
rating
review_text
timestamp
```

### Synthetic Data

Where real datasets do not contain required behavioral fields, synthetic data can be generated for development and experimentation.

Synthetic records must contain:

```text
synthetic_flag = True
```

Synthetic data must never be represented as real customer behavior or real transaction data.

---

# 🔬 EDA

The project performs Exploratory Data Analysis covering:

* Dataset dimensions
* Data types
* Missing values
* Duplicate records
* Product distribution
* Domain distribution
* Category distribution
* Price distribution
* Rating distribution
* Review analysis
* Sentiment analysis
* User behavior
* Search patterns
* View patterns
* Cross-domain interactions

EDA notebooks are located inside:

```text
notebooks/
```

---

# 🔄 Recommendation Workflow

```text
1. User Request
       ↓
2. Query Understanding
       ↓
3. User Behavior Analysis
       ↓
4. Preference Modeling
       ↓
5. Cross-Domain Preference Transfer
       ↓
6. Candidate Retrieval
       ↓
7. Hybrid Ranking
       ↓
8. Price Filtering
       ↓
9. Recommendation Critic
       ↓
10. Explanation Generation
       ↓
11. Recommendation Display
       ↓
12. User Feedback
       ↓
13. Preference Update
```

---

# 📈 Evaluation Metrics

Evaluate the recommendation system using:

### Recommendation Metrics

* Precision@K
* Recall@K
* NDCG@K
* Hit Rate

### System Metrics

* Catalog Coverage
* Recommendation Diversity
* Novelty
* Response Time

### Cross-Domain Metrics

* Cross-domain recommendation accuracy
* Cold-start performance
* Domain transfer effectiveness

### Explainability Metrics

* Explanation faithfulness
* Evidence grounding
* Explanation completeness
* User satisfaction

---

# 🔐 Security

Follow these practices:

* Store API keys in `.env`
* Never commit secrets
* Validate API inputs
* Protect database credentials
* Use authentication where required
* Apply rate limiting
* Avoid exposing private user information
* Ground explanations in actual recommendation evidence

---

# ⚙️ Environment Setup

### Clone the project

```bash
git clone <repository-url>
cd crossrec-xai
```

### Create Python environment

```bash
python -m venv .venv
```

### Windows

```bash
.venv\Scripts\activate
```

### Linux / macOS

```bash
source .venv/bin/activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Configure environment variables

Create:

```text
.env
```

Copy the required values from:

```text
.env.example
```

Add your:

* LLM API key
* Database URL
* Supabase credentials
* Embedding configuration
* Image generation API key

---

# ▶️ Running the Backend

```bash
uvicorn backend.main:app --reload
```

API documentation:

```text
http://localhost:8000/docs
```

---

# ▶️ Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🗄️ Supabase Database

The database schema is located at:

```text
supabase/schema.sql
```

The file contains tables for:

* Users
* Products
* Searches
* Interactions
* Reviews
* User preferences
* Recommendations
* Chat history
* Feedback

Run the SQL statements inside the **Supabase SQL Editor**.

Do not enter the file path itself into the SQL editor.

---

# 🧪 Development Phases

### Phase 1

Dataset preparation and EDA

### Phase 2

Data preprocessing and feature engineering

### Phase 3

Product embeddings and vector search

### Phase 4

Hybrid recommendation engine

### Phase 5

Multi-agent architecture

### Phase 6

Cross-domain recommendation

### Phase 7

Explainability

### Phase 8

AI chat assistant

### Phase 9

Price intelligence

### Phase 10

Image generation

### Phase 11

Feedback-based personalization

### Phase 12

Evaluation and optimization

### Phase 13

Production deployment

---

# 🎯 Project Goal

The final system should provide:

**Personalized + Cross-Domain + Explainable + Conversational + Price-Aware + Agentic Recommendations**

The primary research contribution is the combination of:

```text
Multi-Behavior User Modeling
          +
Cross-Domain Recommendation
          +
Hybrid Recommendation
          +
Agentic AI
          +
Explainable AI
          +
Conversational Recommendation
```

---

# 👨‍💻 Project Type

**Artificial Intelligence & Data Science**

Suitable for:

* Major Project
* Final-Year Project
* Research Prototype
* AI Portfolio
* Recommendation System Research
* Agentic AI Demonstration

---

## License

This project is intended for educational, research, and portfolio purposes. Review the licenses and terms of any external datasets, APIs, models, and services before commercial use.

