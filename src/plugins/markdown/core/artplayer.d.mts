export type ArtPlayerEmbedData = {
	src: string;
	title: string;
	preload: "none" | "auto";
	poster: string | null;
};

export function getArtPlayerEmbedData(
	attributes?: Record<string, unknown>,
): ArtPlayerEmbedData | null;
