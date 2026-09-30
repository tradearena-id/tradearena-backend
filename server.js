require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ============================================================
// TEST SERVER
// ============================================================

app.get("/", (req, res) => {

    res.json({
        success: true,
        service: "TradeArena MT5 Backend",
        status: "ONLINE"
    });

});


// ============================================================
// CREATE MT5 DEMO ACCOUNT
// ============================================================

app.post("/api/mt5/create-demo", async (req, res) => {

    try {

        const {
            userId,
            participantId,
            competitionId,
            initialBalance
        } = req.body;


        // ----------------------------------------------------
        // VALIDASI
        // ----------------------------------------------------

        if (!userId) {

            return res.status(400).json({
                success: false,
                message: "userId wajib diisi"
            });

        }

        if (!participantId) {

            return res.status(400).json({
                success: false,
                message: "participantId wajib diisi"
            });

        }

        if (!competitionId) {

            return res.status(400).json({
                success: false,
                message: "competitionId wajib diisi"
            });

        }


        // ----------------------------------------------------
        // MODAL DEFAULT
        // ----------------------------------------------------

        const balance =
            Number(initialBalance) || 10000;


        console.log(
            "Permintaan akun MT5:",
            {
                userId,
                participantId,
                competitionId,
                balance
            }
        );


        // ====================================================
        // TAHAP SEKARANG
        // ====================================================
        //
        // DI SINI NANTI KITA HUBUNGKAN KE SERVER MT5.
        //
        // JANGAN MEMBUAT LOGIN PALSU.
        //
        // ====================================================


        return res.status(501).json({

            success: false,

            message:
                "MT5 SERVER BELUM TERHUBUNG"

        });


    } catch (error) {

        console.error(
            "MT5 ERROR:",
            error
        );

        return res.status(500).json({

            success: false,

            message:
                "Terjadi kesalahan server."

        });

    }

});


// ============================================================
// PORT
// ============================================================

const PORT =
    process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `TradeArena Backend berjalan di port ${PORT}`
    );

});