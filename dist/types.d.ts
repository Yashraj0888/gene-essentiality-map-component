export interface GeneEssentialityChartProps {
    ensemblId: string;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
    className?: string;
}
