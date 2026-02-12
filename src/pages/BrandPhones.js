import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPhonesByBrand, getBrand } from "../data/phones";
import PhoneCard from "../Components/PhoneCard";

const BrandPhones = () => {
  const { brand } = useParams();
  const phones = getPhonesByBrand(brand);
  const brandData = getBrand(brand);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 600;
  const isTablet = width <= 992;

  const styles = {
    container: {
      padding: isMobile ? "1rem" : "2rem",
      maxWidth: "1400px",
      margin: "0 auto",
      paddingRight: isMobile ? "1rem" : "70px",
    },
    breadcrumb: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "2rem",
      fontSize: isMobile ? "0.85rem" : "0.95rem",
      flexWrap: "wrap",
    },
    breadcrumbLink: {
      color: "#667eea",
      textDecoration: "none",
    },
    header: {
      textAlign: "center",
      marginBottom: isMobile ? "2rem" : "3rem",
    },
    title: {
      fontSize: isMobile ? "1.6rem" : isTablet ? "2rem" : "2.5rem",
      fontWeight: "800",
      color: "#333",
      marginBottom: "0.5rem",
    },
    titleHighlight: {
      background:
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      color: "#666",
      fontSize: isMobile ? "0.95rem" : "1.1rem",
      marginBottom: "1rem",
    },
    count: {
      display: "inline-block",
      background:
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: isMobile ? "0.4rem 1rem" : "0.5rem 1.5rem",
      borderRadius: "25px",
      fontSize: isMobile ? "0.85rem" : "0.95rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : isTablet
        ? "repeat(2, 1fr)"
        : "repeat(auto-fill, minmax(280px, 1fr))",
      gap: isMobile ? "1rem" : "2rem",
    },
    noPhones: {
      textAlign: "center",
      padding: isMobile ? "2rem" : "4rem",
      background: "white",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    },
    backBtn: {
      display: "inline-block",
      background:
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "600",
      marginTop: "1rem",
      fontSize: isMobile ? "0.9rem" : "1rem",
    },
  };

  if (!brandData) {
    return (
      <div style={styles.noPhones}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📱</div>
        <h2>Brand not found</h2>
        <Link to="/" style={styles.backBtn}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>
        <Link to="/" style={styles.breadcrumbLink}>
          Home
        </Link>
        <span style={{ color: "#999" }}>/</span>
        <span style={{ color: "#333", fontWeight: "600" }}>
          {brandData.name}
        </span>
      </div>

      <div style={styles.header}>
        <div
          style={{
            fontSize: isMobile ? "3rem" : "4rem",
            marginBottom: "1rem",
          }}
        >
          {brandData.logo}
        </div>

        <h1 style={styles.title}>
          {brandData.name}{" "}
          <span style={styles.titleHighlight}>Smartphones</span>
        </h1>

        <p style={styles.subtitle}>
          Explore the latest {brandData.name} phones
        </p>

        <div style={styles.count}>
          <strong>{phones.length}</strong> phones available
        </div>
      </div>

      {phones.length > 0 ? (
        <div style={styles.grid}>
          {phones.map((phone) => (
            <PhoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      ) : (
        <div style={styles.noPhones}>
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📱</div>
          <h2>No phones found</h2>
          <Link to="/" style={styles.backBtn}>
            ← Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default BrandPhones;