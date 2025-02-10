import React from 'react';

interface GeneEssentialityChartProps$1 {
    ensemblId: string;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
}
declare const GeneEssentialityChart: ({ ensemblId, setLoading, setError }: GeneEssentialityChartProps$1) => React.JSX.Element;

interface GeneEssentialityChartProps {
    ensemblId: string;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
    className?: string;
}

export { GeneEssentialityChart, GeneEssentialityChartProps };
