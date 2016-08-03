<p style="text-align: left;font-size:16px;">Hi {{ $first_name }},</p>

<p style="text-align: left;font-size:16px;">Recently you requested password reset link for your account. If you did not request password reset, then please ignore this email.</p>

<p style="text-align: left;font-size:16px;">Please click on following link <a target="_blank" href="{{ route('auth.reset', ['token' => $token]) }}">Reset Password</a>.</p>

<p style="text-align: left;font-size:16px;">If this was not you, please disregard this message. The link will expire soon.</p>
