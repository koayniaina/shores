import React from "react";
import styles from "@/styles/Product.module.css";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function Product() {
  return (
    <div className={styles.header}>
      <div className="logo">
        <Link href="/">My Product</Link>
      </div>
    </div>
  );
}
