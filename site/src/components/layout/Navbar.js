import React from 'react'

import Container from './Container'
import styles from './Navbar.module.css'


function Navbar() {
    return (
        <nav class={styles.navbar}>
        <div className="logo">
            <h2>Madness</h2>
        </div>

            <Container>
                <ul class={styles.list}>
                    <li class={styles.item}> <a href="/" >Home</a> </li>
                    <li class={styles.item}> <a href="/Empresa">Empresa</a></li>
                    <li class={styles.item}> <a href="/Contato">Contato</a> </li>
                </ul>
            </Container>

        <div class={styles.login}>
            <a href="Login">Login</a>
        </div>

        </nav>
    );
}

export default Navbar
