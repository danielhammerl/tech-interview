import React from 'react';
import './navigation.css';
import {NavigationItem} from "./NavigationItem";

export function Navigation() {
    return (
        <div className="navigation">
            <NavigationItem title="Persönliche Daten"/>
            <NavigationItem title="Daten zur Immobilie" />
        </div>
    )
}