---
time: 14:35 - 15:15
title: pgcapture - CDC framework for PostgreSQL in Go
speaker:
  name: Kenny Chen / Benjamin Tsai
  title: Senior Backend Engineers @ Dcard
  info: |
    Kenny Chen：來自 Dcard 的 Senior Backend Engineer，喜歡研究 PostgreSQL 跟寫技術文章。 
    Benjamin Tsai：來自 Dcard 的 Senior Backend Engineer。
---

pgcapture 最初是由 Dcard 團隊以 Golang 開發並基於 PostgreSQL 的 CDC（Change Data Capture）framework。此次演講將從 CDC 的基礎概念和實際應用場景著手，深入探討 PostgreSQL 中的 logical replication 等技術。並介紹 pgcapture 的架構設計，包括如何捕捉 DDL 和 DML message，並如何儲存於 pulsar 中，以及在資料同步過程中如何處理事務丟失的問題。

此外，我們將探討 pgcapture 在以下應用場景中的實用性：

1. Robust Microservice Event Queueing
2. Data synchronization, Moving data to other databases (ex. for OLAP)
3. Upgrade PostgreSQL with minimum downtime

最後，介紹 pgcapture 未來展望與路線圖。
