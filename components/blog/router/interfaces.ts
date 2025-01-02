import React from 'react';

export interface Blog {
    title: string;
    description: string;
    date: string;
    slug: string;
    content: React.ReactNode;
}