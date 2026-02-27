# Next Level Builders, LLC Website

**Live Site:** https://www.nextlevelbuildersllc.com

This repository contains the source code for the Next Level Builders, LLC website, a Kansas City–based construction company.

---

## 🏗️ Architecture Overview

The current production deployment uses:

- **Amazon S3** – Static site hosting
- **Amazon CloudFront** – Global content delivery (CDN)
- **Amazon Route 53** – DNS management

The project previously supported deployment via AWS Elastic Beanstalk.

This architecture was used to optimize cost efficiency, scalability, and performance using a CDN-based static hosting model.

---

## ⚙️ Tech Stack

The site is built with:

- **Vite**
- **JS React**
- **Styled Components** – Used to keep styling in components

### Additional Libraries

- **React DOM**
- **React Router**
- **React Icons**
- **React Slick** – Photo Carousel

---

## 🚀 Deployment Model

The application is built as a static bundle and deployed to an Amazon S3 bucket.  
Amazon CloudFront distributes content globally with caching for performance optimization.  
Amazon Route 53 manages DNS routing for the custom domain.

---

## 📌 Notes

- Fully client-side rendered (CSR)
- No server-side runtime required
- Optimized for low-cost static hosting
