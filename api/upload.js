// api/upload.js - Serverless function untuk handle large files
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '200mb',
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { file, filename, chunk, totalChunks, chunkIndex } = req.body;
    
    // Simpan chunk (gunakan Vercel KV, Upstash, atau S3 di production)
    // Untuk demo, kita return direct URL
    
    return res.status(200).json({
      success: true,
      url: `data:application/octet-stream;base64,${file}`,
      directUrl: `data:application/octet-stream;base64,${file}`,
      message: 'File uploaded successfully'
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
