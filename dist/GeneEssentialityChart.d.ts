import React from "react";
interface GeneEssentialityChartProps {
    ensemblId: string;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
}
export declare const GeneEssentialityChart: ({ ensemblId, setLoading, setError }: GeneEssentialityChartProps) => React.JSX.Element;
export default GeneEssentialityChart;
