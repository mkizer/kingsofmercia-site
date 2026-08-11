export interface GalleryImageMeta {
  date?: string;
  credit?: string;
  description?: string;
}

/**
 * Gallery image metadata registry keyed by filename (e.g. '2026_03_DescText.png', '2024_01_KoMvideo.jpg').
 * Any fields omitted will fall back to default logic:
 * - date: Extracted year from filename pattern `YYYY_NN`
 * - credit: Default to "Jeremy Saffer"
 */
export const galleryMetadata: Record<string, GalleryImageMeta> = {
  // Custom overrides can be added here, e.g.:
  // '2022_01_KoM.jpg': { credit: 'Jeremy Saffer', description: 'Promotional photo for Kings of Mercia' }
  '2022_01_KoM_Logo.jpg': { credit: 'Chris Kissadjekian, Darren Griffiths', description: '' },
  '2022_02_KoM.jpg': { credit: 'Simon Ward, Jeremy Saffer', description: '' },
  '2022_03_KoM.jpg': { credit: 'Simon Ward, Jeremy Saffer', description: '' },
  '2022_04_KoM.jpg': { credit: 'Simon Ward, Jeremy Saffer', description: '' },
  '2022_05_KoM.jpg': { credit: 'Simon Ward, Jeremy Saffer', description: '' },
  '2022_06_KoM.png': { credit: 'Scott Towns, Jeremy Saffer', description: '' },
  '2022_07_KoM.jpg': { credit: 'Scott Towns, Jeremy Saffer', description: '' },
  '2022_08_KoM_bw.jpg': { credit: 'Scott Towns, Jeremy Saffer', description: '' },
  '2022_09_JM.jpg': { credit: 'Jeremy Saffer', description: '' },
  '2022_10_JM.jpg': { credit: 'Jeremy Saffer', description: '' },
  '2022_11_HumankindVideo.jpg': { credit: 'Tara Lear', description: 'Humankind video shoot' },
  '2022_12_HumankindVideo.jpg': { credit: 'Tara Lear', description: 'Humankind video shoot' },
  '2022_13_HumankindVideo.jpg': { credit: 'Stephanied Cabral', description: 'Humankind video shoot' },
  '2022_14_HumankindVideo.jpg': { credit: 'Stephanied Cabral', description: 'Humankind video shoot' },
  '2022_15_HumankindVideo.jpg': { credit: 'Scott Towns', description: 'Liberate Me video shoot' },
  '2022_16_HumankindVideo.jpg': { credit: 'Scott Towns', description: 'Liberate Me video shoot' },
  '2022_17_SP.jpg': { credit: 'Stephanied Cabral', description: '' },
  '2022_18_SP.jpg': { credit: 'Stephanied Cabral', description: '' },
  '2022_19_JM.jpg': { credit: 'Jeremy Saffer', description: '' },
  '2022_20_JM.jpg': { credit: 'Stephanied Cabral', description: '' },
  '2022_21_SO.jpg': { credit: 'Scott Towns', description: '' },
  '2022_22_SO.jpg': { credit: 'Scott Towns', description: '' },
  '2022_23_SweetRevengeVideo.jpg': { credit: ' ', description: 'Sweet Revenge video' },
  '2022_24_SweetRevengeVideo.jpg': { credit: ' ', description: 'Sweet Revenge video' },
  '2022_25_SweetRevengeVideo.jpg': { credit: ' ', description: 'Sweet Revenge video' },
  '2024_01_KoM.jpg': { credit: 'Simon Ward, Jeremy Saffer', description: '' },
  '2024_02_KoM.jpg': { credit: 'Simon Ward, Jeremy Saffer', description: '' },
};

export function getGalleryImageMeta(filename: string): {
  date: string;
  credit: string;
  description?: string;
} {
  const custom = galleryMetadata[filename] || {};

  // Parse YYYY from filename pattern like 2024_01_KoM.jpg
  const match = filename.match(/(\d{4})_\d+/i);
  const fallbackYear = match ? match[1] : '';

  return {
    date: custom.date || fallbackYear,
    credit: custom.credit || 'Jeremy Saffer',
    description: custom.description,
  };
}
