import { Resend } from 'resend'
// import { RESEND_API, EMAIL_TO } from '$env/static/private'

const resend = new Resend('re_TdVqdfwb_7q5PWQDEfBMdDdt7Ya537hkw')

export async function POST({ request }) {
    const formData = await request.formData();

    const name = formData.get('name');
    const surname = formData.get('surname');
    const company = formData.get('company');
    const select = formData.get('select');
    const email = formData.get('email');
    const details = formData.get('details');

    const res = await resend.emails.send({
        from: 'baltvesta.lt <no-reply@wam.lt>',
        to: ['office@baltvesta.lt'],
        subject: 'Užklausa iš baltvesta.lt',
        html: `
            Vardas: ${name}<br>
            Pavardė: ${surname}<br>
            Kompanija: ${company}<br>
            Pasirinkimas: ${select}<br>
            El. paštas: ${email}<br>
            Detalės: ${details}
        `,
    });

    const responseData = {
        success: false,
        errors: {}
    }

    if (res.status === 'error') {
        responseData.errors = res.errors
    } else {
        responseData.success = true
    }

    return new Response(JSON.stringify(responseData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

