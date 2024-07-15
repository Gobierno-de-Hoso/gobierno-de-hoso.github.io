// src/utils/readPdfMetadata.js
import fs from 'fs';
import { PDFDocument } from 'pdf-lib';

export async function readPdfMetadata(filePath) {
  const existingPdfBytes = fs.readFileSync(filePath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  const metadata = {
    title: pdfDoc.getTitle() || 'N/A',
    author: pdfDoc.getAuthor() || 'N/A',
    subject: pdfDoc.getSubject() || 'N/A',
    keywords: pdfDoc.getKeywords() || 'N/A',
    producer: pdfDoc.getProducer() || 'N/A',
    creator: pdfDoc.getCreator() || 'N/A',
    creationDate: pdfDoc.getCreationDate() || 'N/A',
    modificationDate: pdfDoc.getModificationDate() || 'N/A',
  };

  return metadata;
}
