'use client'

import Link from "next/link";
import styles from "./styles.module.css";
import MealsGrid from "@/components/MealsGrid/MealsGrid";
import { observer } from "mobx-react-lite";
import { useStore } from "@/app/storeProvider";

const Meals = observer(() => {
    const appStore = useStore();
    const meals = appStore.mealsStore.meals;

    return (
        <>
            <header className={styles.header}>
                <h1>Delicious meals, created {' '}
                    <span className={styles.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
})

export default Meals;