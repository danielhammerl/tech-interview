import React from 'react';
import './navigation.css';
import {NavigationItem} from "./NavigationItem";

export function Navigation() {
    return (
        <div className="navigation">
            <NavigationItem title="Persönliche Daten" id="person"/>
            <NavigationItem title="Daten zur Immobilie" id="estate" />
            <NavigationItem title="Pflichtfelder" id="pfp" />
        </div>
    )
}